import TableRow from "./TableRow"
import Pagination from "../../components/Pagination"
import { useState } from "react"
import { Card } from "@material-tailwind/react"
import Modal from "../../components/Modal"
import PaymentForm from "./PaymentForm"

const TABLE_HEAD = ["Invoice ID", "Name", "Payment", "Status", "Reports", "Delivery"]
const TABLE_ROWS = [
  { id: 123, name: "Samiul", totalAmount: 500, paid: 200, delivered: false, totalTest: 4, completed: 4 },
  { id: 124, name: "Fahad", totalAmount: 5000, paid: 400, delivered: false, totalTest: 5, completed: 4 },
  { id: 125, name: "Sumi", totalAmount: 500, paid: 400, delivered: false, totalTest: 5, completed: 5 },
  { id: 126, name: "Ontora", totalAmount: 500, paid: 500, delivered: true, totalTest: 10, completed: 10 },
  { id: 127, name: "Dipa", totalAmount: 1500, paid: 500, delivered: false, totalTest: 10, completed: 4 },
]

const DeliverReport = () => {
  const [data, setData] = useState(TABLE_ROWS)
  const [modal, setModal] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)
  const [paid, setPaid] = useState(0)
  const [due, setDue] = useState(0)
  const [enteredAmount, setEnteredAmount] = useState(0)
  const [invoiceId, setInvoiceId] = useState(null)

  const handleDelivery = (id) => {
    const updated = data.map((item) => {
      if (item.id === id) {
        item.delivered = !item.delivered
        return item
      }
      return item
    })
    setData(updated)
  }

  const openModal = (id, totalAmount, paid) => {
    setTotalAmount(parseFloat(totalAmount))
    setPaid(parseFloat(paid))
    setDue(parseFloat(totalAmount) - parseFloat(paid))
    setEnteredAmount(totalAmount - paid)
    setInvoiceId(id)
    setModal(true)
  }

  const handleAmountChange = (e) => {
    const amount = parseFloat(e.target.value || 0)
    setEnteredAmount(amount)
  }

  const clearState = () => {
    setTotalAmount(0)
    setPaid(0)
    setDue(0)
    setEnteredAmount(0)
    setModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updated = data.filter((item) => {
      if (item.id === invoiceId) {
        item.paid = item.paid + enteredAmount
        console.log(item)
        return item
      }
      return item
    })
    setData(updated)
    clearState()
  }

  const closeModal = () => {
    clearState()
  }

  return (
    <Card className="h-full w-full overflow-scroll">
      {modal && (
        <Modal onClose={closeModal} title="Collect Payment" actionText="Collect Payment" onSubmit={handleSubmit}>
          <PaymentForm
            totalAmount={totalAmount}
            paid={paid}
            due={due}
            enteredAmount={enteredAmount}
            onChange={handleAmountChange}
          />
        </Modal>
      )}
      <table className="mx-auto bg-indigo-50 min-w-max table-auto text-left md:w-2/3 md:mt-20">
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
          {data.map(({ id, name, totalAmount, paid, totalTest, completed, delivered }, index) => {
            const isLast = index === TABLE_ROWS.length - 1
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-500"
            const input = {
              id,
              name,
              totalAmount,
              paid,
              delivered,
              totalTest,
              completed,
              onDelivery: handleDelivery,
              onCollect: openModal,
              classes,
            }
            return <TableRow key={id} input={input} />
          })}
        </tbody>
      </table>
      <div className="w-full md:w-2/3 mx-auto">
        <Pagination />
      </div>
    </Card>
  )
}

export default DeliverReport
