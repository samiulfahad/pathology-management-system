import React, { useEffect, useState } from "react"
import TestList from "./TestList2"
import InvoiceSummary from "./InvoiceSummary"
import PatientData2 from "./PatientData2"

const testList = [
  { name: "Blood Test 1", price: 300 },
  { name: "Blood Test 2", price: 300 },
  { name: "Blood Test 3", price: 300 },
  { name: "RBS", price: 200 },
  { name: "XRay", price: 350 },
  { name: "ECG", price: 200 },
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

  const { discount, adjustment, paid } = invoiceData

  useEffect(() => {
    let totalAmount = 0
    checkedTest.forEach((item) => {
      totalAmount = totalAmount + item.price
    })

    const priceAfterDiscount = totalAmount - (discount * totalAmount) / 100
    const netAmountPrice = priceAfterDiscount - adjustment
    setInvoiceData((prevState) => ({
      ...prevState,
      total: totalAmount,
      afterDiscount: priceAfterDiscount,
      adjustment: adjustment,
      netAmount: netAmountPrice,
    }))

    console.log(invoiceData)
  }, [discount, adjustment, paid, checkedTest])

  const handleCheckedTest = (test) => {
    if (!checkedTest.some((item) => item.name === test.name)) {
      setCheckedTest([...checkedTest, test])
    } else {
      const updated = checkedTest.filter((item) => item.name !== test.name)
      setCheckedTest(updated)
    }
  }
  const handleDiscount = (value) => {
    setInvoiceData({ ...invoiceData, discount: value })
  }

  const handleAdjustment = (value) => {
    setInvoiceData({ ...invoiceData, adjustment: parseFloat(value) })
  }

  const handlePayment = (value) => {
    setInvoiceData({ ...invoiceData, paid: value })
  }

  const handlePatientData = (e) => {
    const { name, value } = e.target
    setPatientData({ ...patientData, [name]: value })
    console.log(patientData);
  }

  return (
    <section className="w-full mx-auto">
      <div className="w-1/2 mx-auto">
        <PatientData2 data={patientData} onChange={handlePatientData} />
      </div>

      <div className="w-1/2 mx-auto py-12">
        <TestList list={testList} onChange={handleCheckedTest} />
      </div>

      <div className="w-1/2 mx-auto">
        <InvoiceSummary
          data={invoiceData}
          onPay={handlePayment}
          onDiscount={handleDiscount}
          onAdjustment={handleAdjustment}
        />
      </div>
      <div className="w-1/2 mx-auto py-10 flex gap-10">
        <button className="btn">Create Invoice</button>
        <button className="btn">Cancel</button>
      </div>
    </section>
  )
}

export default CreateInvoice
