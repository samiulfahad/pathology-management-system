import { useEffect, useState } from "react"
import axios from "axios"
import TableRow from "./TableRow"
import Pagination from "../../components/Pagination"
import { Card } from "@material-tailwind/react"
import Modal from "../../components/Modal"
import PaymentForm from "./PaymentForm"
import { useDispatch, useSelector } from "react-redux"
import { setKeyword } from "../../store/searchSlice"
import Search from "../../components/Search"
import Loading from "../../components/Loading"
import Layout from "../../components/Layout"

const TABLE_HEAD = ["Invoice ID", "Name", "Payment", "Status", "Reports", "Delivery", "Action"]

const DeliverReport = () => {
  const [data, setData] = useState([])
  const [modal, setModal] = useState(false)
  const [netAmount, setTotalAmount] = useState(0)
  const [paid, setPaid] = useState(0)
  const [due, setDue] = useState(0)
  const [enteredAmount, setEnteredAmount] = useState(0)
  const [selectedId, setSelectedId] = useState(null)
  const [loadingState, setLoadingState] = useState("fetchingData")

  const search = useSelector((state) => state.search)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/invoice/all")
        console.log(response.data)
        setData(response.data.invoices)
        setLoadingState(null)
      } catch (e) {
        setLoadingState("fetchingDataError")
        console.log(e)
      }
    }
    setTimeout(fetchData, 500)
  }, [])

  const handleDelivery = async (_id) => {
    try {
      const response = await axios.put("http://localhost:3000/api/v1/invoice/update", {
        _id,
        update: "delivered",
      })
      if (response && response.data && response.data.success) {
        const updatedData = data.map((item) => {
          if (item._id === _id) {
            return { ...item, delivered: true }
          }
          return item
        })
        setData(updatedData)
        return true
      } else {
        return false
      }
    } catch (e) {}
  }

  const openPaymentModal = (_id, netAmount, paid) => {
    setTotalAmount(parseFloat(netAmount))
    setPaid(parseFloat(paid))
    setDue(parseFloat(netAmount) - parseFloat(paid))
    setEnteredAmount(netAmount - paid)
    setSelectedId(_id)
    setModal(true)
  }

  const handleAmountChange = (e) => {
    const amount = parseFloat(e.target.value || 0)
    if(amount <= due){
      setEnteredAmount(amount)
    } else {
      setEnteredAmount(due)
    }
  }

  const clearState = () => {
    setTotalAmount(0)
    setPaid(0)
    setDue(0)
    setEnteredAmount(0)
    setModal(false)
  }

  const handlePayment = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.put("http://localhost:3000/api/v1/invoice/update", {
        _id: selectedId,
        update: "paid",
        amount: enteredAmount
      })
      if (response && response.data && response.data.success) {
        const updated = data.filter((item) => {
          if (item._id === selectedId) {
            item.paid = item.paid + enteredAmount
            return item
          }
          return item
        })
        setData(updated)
        clearState()
      }
    } catch (e) {}
  }

  const closeModal = () => {
    clearState()
  }

  const onSearch = () => {
    // Add logic to handle search based on searchKeyword and searchType
    console.log("Search keyword:", search.keyword)
    console.log("Search type:", search.type)
    dispatch(setKeyword(""))
  }

  return (
    <Layout>
      {loadingState === "fetchingData" ? (
        <Loading title="Loading Data..." />
      ) : (
        // overflow-scroll
        <section className="bg-blue-gray-200">
          <Card className="min-h-screen w-full bg-blue-gray-200">
            {modal && (
              <Modal onClose={closeModal} title="Collect Payment" actionText="Collect Payment" onSubmit={handlePayment}>
                <PaymentForm
                  netAmount={netAmount}
                  paid={paid}
                  due={due}
                  enteredAmount={enteredAmount}
                  onChange={handleAmountChange}
                />
              </Modal>
            )}
            <div className="w-80 mx-auto py-4">
              <Search onSearch={onSearch} />
            </div>
            <table className="mx-auto bg-indigo-50 min-w-max table-auto text-left md:w-2/3">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b border-blue-gray-500 text-white bg-indigo-500 p-4">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map(({ _id, invoiceId, name, netAmount, paid, completed, delivered }, index) => {
                  const isLast = index === data.length - 1
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-500"
                  const input = {
                    _id,
                    invoiceId,
                    name,
                    netAmount,
                    paid,
                    delivered,
                    completed,
                    onDelivery: handleDelivery,
                    onCollect: openPaymentModal,
                    classes,
                  }
                  return <TableRow key={_id} input={input} />
                })}
              </tbody>
            </table>
            <div className="w-full md:w-2/3 mx-auto">
              <Pagination />
            </div>
          </Card>
        </section>
      )}
    </Layout>
  )
}

export default DeliverReport
