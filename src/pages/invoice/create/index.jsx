import { useEffect, useState } from "react"
import axios from "axios"
import TestList from "./TestList"
import InvoiceData from "./InvoiceData"
import PatientData from "./PatientData"
import ErrorModal from "../../../components/ErrorModal"
import { useNavigate } from "react-router-dom"

const testList = [
  { name: "CBC", code: "t1", price: 300 },
  { name: "RBS", code: "t2", price: 400 },
  { name: "ECG", code: "t3", price: 500 },
  { name: "Ultra", code: "t4", price: 200 },
  { name: "X-ray", code: "t5", price: 600 },
  { name: "Echo", code: "t6", price: 100 },
]

const CreateInvoice = () => {
  const [checkedTest, setCheckedTest] = useState([])
  const [invoiceData, setInvoiceData] = useState({
    total: 0,
    discount: 0,
    afterDiscount: 0,
    adjustment: 0,
    netAmount: 0,
    paid: 0,
  })
  const [patientData, setPatientData] = useState({ name: "", age: "", contact: "", referredBy: "" })

  const { total, discount, adjustment } = invoiceData
  const [loadingState, setLoadingState] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    let totalAmount = 0
    checkedTest.forEach((item) => {
      totalAmount = totalAmount + item.price
    })
    setInvoiceData({ ...invoiceData, total: totalAmount })
    console.log(invoiceData)
  }, [checkedTest])

  useEffect(() => {
    const afterDiscount = total - (discount * total) / 100
    const netAmount = afterDiscount - adjustment
    setInvoiceData({ ...invoiceData, afterDiscount, netAmount })
  }, [total, discount, adjustment])

  const handleCheckedTest = (test) => {
    if (!checkedTest.some((item) => item.name === test.name)) {
      setCheckedTest([...checkedTest, test])
    } else {
      const updated = checkedTest.filter((item) => item.name !== test.name)
      setCheckedTest(updated)
    }
  }
  const handlePatientData = (e) => {
    const { name, value } = e.target
    setPatientData({ ...patientData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (checkedTest.length === 0) {
      setLoadingState("error")
      return
    }
    try {
      const data = {
        name: patientData.name,
        age: patientData.age,
        contact: patientData.contact,
        referredBy: patientData.referredBy,
        testList: checkedTest,
        total: invoiceData.total,
        netAmount: invoiceData.netAmount,
        paid: invoiceData.paid,
      }
      console.log(data.testList);
      const response = await axios.post("http://localhost:3000/api/v1/invoice/create", data)
      if (response.data.success) {
        console.log("data added")
        console.log(response.data)
        navigate("/invoice/print")

      }
    } catch (e) {
      if (e.response) {
        console.log(e.response.data)
      } else {
        console.log(e)
      }
    }
  }
  const closeModal = () => {
    setLoadingState(null)
  }

  return (
    <section className="w-full mx-auto">
      {loadingState == "error" && <ErrorModal title="Please select test" onClose={closeModal} />}
      <form onSubmit={handleSubmit}>
        <div className="w-1/2 mx-auto">
          <PatientData data={patientData} onChange={handlePatientData} />
        </div>

        <div className="w-1/2 mx-auto py-12">
          <TestList list={testList} onChange={handleCheckedTest} />
        </div>

        <div className="w-1/2 mx-auto">
          <InvoiceData
            data={invoiceData}
            onPay={(value) => setInvoiceData({ ...invoiceData, paid: value })}
            onDiscount={(value) => setInvoiceData({ ...invoiceData, discount: value })}
            onAdjustment={(value) => setInvoiceData({ ...invoiceData, adjustment: parseFloat(value) })}
          />
        </div>
        <div className="w-1/2 mx-auto py-10 flex gap-10">
          <button type="submit" className="btn">
            Create Invoice
          </button>
          <button className="btn">Cancel</button>
        </div>
      </form>
    </section>
  )
}

export default CreateInvoice

