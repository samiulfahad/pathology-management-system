import { Input, Select, Option, Checkbox } from "@material-tailwind/react"
import React, { useState, useEffect } from "react"

const CreateInvoice = () => {
  const [checkedList, setCheckedList] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalPayable, setTotalPayable] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [initialPayment, setInitialPayment] = useState(0)

  const testList = [
    {
      name: "Blood Test 1",
      price: 300,
    },
    {
      name: "Blood Test 2",
      price: 300,
    },
    {
      name: "Blood Test 3",
      price: 300,
    },
    {
      name: "RBS",
      price: 200,
    },
    {
      name: "XRay",
      price: 350,
    },
    {
      name: "ECG",
      price: 200,
    },
  ]

  useEffect(() => {
    const total = checkedList.reduce((acc, curr) => acc + curr.price, 0)
    setTotalPrice(total)
  }, [checkedList])

  useEffect(() => {
    setTotalPayable(totalPrice - discount)
  }, [totalPrice, discount])

  const handleCheckboxChange = (test) => {
    if (!checkedList.some((item) => item.name === test.name)) {
      setCheckedList([...checkedList, test])
    } else {
      const updatedList = checkedList.filter((item) => item.name !== test.name)
      setCheckedList(updatedList)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Total: " + totalPrice)
    console.log("Discount: " + discount)
    console.log("Payable: " + totalPayable)
    console.log("Paid: " + initialPayment)
    const due = totalPayable - initialPayment
    console.log("Due: " + due)
    checkedList.forEach((item) => {
      console.log(item.name + " - " + item.price)
    })
  }

  return (
    <section className="py-16 bg-stone-100 font-poppins dark:bg-gray-800">
      <div className="flex flex-col justify-center items-center mx-auto md:w-1/2">
        <h2 className="py-4 text-xl font-bold">Create an Invoice</h2>
        {/* Patient Info Section */}
        <div className="w-full px-10 flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
          <Input label="Name" />
          <Input label="Contact No." />
          <Select label="Referred By">
            <Option>Doc 1</Option>
            <Option>Doc 2</Option>
            <Option>Doc 3</Option>
            <Option>Doc 4</Option>
          </Select>
        </div>

        {/* Show Test List */}
        <div>
          <p className="text-lg font-bold mt-8 -mb-2 text-center">Select The Tests:</p>
          <div className="flex flex-wrap items-center justify-center">
            {testList.map((test) => (
              <Checkbox
                key={test.name}
                label={test.name}
                value={test.name}
                onChange={() => handleCheckboxChange(test)}
              />
            ))}
          </div>
        </div>

        <div className="bg-indigo-200 w-4/5 mx-auto px-10 pt-4 pb-10 rounded-lg">
          <div className="text-lg md:w-2/3 mx-auto font-bold flex justify-between items-center">
            <p>Name</p>
            <p>Price</p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="w-full mx-auto">
              {checkedList.map((test, index) => (
                <div
                  key={test.name}
                  className="text-md font-bold md:w-2/3 space-x-6  mx-auto flex justify-between items-center"
                >
                  <p>
                    {index + 1}. {test.name}{" "}
                  </p>
                  <div>
                    <p>{test.price}</p>
                  </div>
                </div>
              ))}
              <div className="flex flex-col justify-between w-full md:w-4/5 mx-auto space-y-2">
                <div className="bg-blue-800 w-full py-[1px] mt-6"></div>
                <div className="flex justify-between font-bold w-full pr-4">
                  Total:
                  <p>{totalPrice}</p>
                </div>
                <div className="flex justify-between space-x-4 font-bold">
                  Discount:{" "}
                  <input
                    value={discount}
                    type="number"
                    className="text-right w-20"
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
                <div className="flex justify-between text-xl">
                  Price After Discount:
                  <p className="w-20 text-right pr-4 bg-blue-500 text-white font-bold">{totalPayable}</p>
                </div>
                <div className="flex justify-between">
                  Paid:{" "}
                  <input
                    value={initialPayment}
                    type="number"
                    className="text-right w-20"
                    onChange={(e) => setInitialPayment(e.target.value)}
                  />
                </div>
                <div className="flex justify-between font-bold">
                  Due:
                  <p className="w-20 bg-red-500 text-white text-right pr-4 my-2">
                    {parseFloat(totalPayable) - parseFloat(initialPayment)}
                  </p>
                </div>
              </div>
              <button type="submit" className="px-8 py-4 text-lg w-full text-center text-white font-bold bg-indigo-500">
                Create Invoice
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateInvoice
