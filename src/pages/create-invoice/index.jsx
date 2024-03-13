import React, { useEffect, useState } from "react"
import PatientData from "./PatientData"
import TestList from "./TestList"
import InvoiceDetails from "./InvoiceDetails"
import { useNavigate } from "react-router-dom"

const testList = [
  { name: "Blood Test 1", price: 300 },
  { name: "Blood Test 2", price: 300 },
  { name: "Blood Test 3", price: 300 },
  { name: "RBS", price: 200 },
  { name: "XRay", price: 350 },
  { name: "ECG", price: 200 },
]

const CreateInvoice = () => {
  const initialPatientData = { name: "", age: "", contact: "", referredBy: "" }
  const navigate = useNavigate()
  const [patientData, setPatientData] = useState(initialPatientData)
  const [patientDataModal, setPatientDataModal] = useState(true)
  const [testListModal, setTestListModal] = useState(false)
  const [invoiceDetails, setInvoiceDetails] = useState(false)
  const [checkedTest, setCheckedTest] = useState([])
  const [amount, setAmount] = useState({
    total: 0,
    discount: 0,
    afterDiscount: 0,
    adjustment: 0,
    netAmount: 0,
    paid: 0,
    due: 0,
  })

  const n = amount.netAmount
  const p = amount.paid
  useEffect(() => {
    setAmount({ ...amount, due: parseFloat(amount.netAmount) - parseFloat(amount.paid) })
  }, [n, p])

  const handlePatientData = (e) => {
    const { name, value } = e.target
    setPatientData({ ...patientData, [name]: value })
  }

  const handleTestList = (test) => {
    if (!checkedTest.some((item) => item.name === test.name)) {
      setCheckedTest([...checkedTest, test])
    } else {
      const updated = checkedTest.filter((item) => item.name !== test.name)
      setCheckedTest(updated)
    }
  }

  const displayTestList = () => {
    setPatientDataModal(false)
    setInvoiceDetails(false)
    setTestListModal(true)
  }

  const displayInvoiceDetails = () => {
    setPatientDataModal(false)
    setTestListModal(false)

    const total = checkedTest.reduce((acc, item) => acc + item.price, 0)
    setAmount({ ...amount, total, afterDiscount: total, netAmount: total })

    setInvoiceDetails(true)
  }

  const handleDiscount = (d) => {
    const discount = parseFloat(d || 0)
    const afterDiscount = amount.total - amount.total * (discount / 100)
    setAmount({ ...amount, discount, afterDiscount, netAmount: afterDiscount })
  }

  const handleAdjustment = (a) => {
    const adjustment = parseFloat(a || 0)
    const netAmount = amount.afterDiscount - adjustment
    setAmount({ ...amount, adjustment, netAmount })
  }

  const handlePay = (paid) => {
    const paidAmount = parseFloat(paid || 0)
    const due = amount.netAmount - paidAmount
    setAmount({ ...amount, paid: paidAmount, due })
  }

  return (
    <section className="py-16 bg-stone-100 font-poppins dark:bg-gray-800">
      {patientDataModal && (
        <PatientData onClose={() => navigate("/")} onNext={displayTestList} onChange={handlePatientData} />
      )}
      {testListModal && (
        <TestList
          list={testList}
          onClose={() => navigate("/")}
          onNext={displayInvoiceDetails}
          onChange={handleTestList}
        />
      )}
      {invoiceDetails && (
        <InvoiceDetails
          data={patientData}
          checkedList={checkedTest}
          amount={amount}
          onDiscount={handleDiscount}
          onAdjustment={handleAdjustment}
          onPay={handlePay}
        />
      )}
    </section>
  )
}

export default CreateInvoice
