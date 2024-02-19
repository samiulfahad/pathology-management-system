import { Input, Select, Option, Checkbox } from "@material-tailwind/react"
import React, { useState, useEffect } from "react"

const CreateInvoice = () => {
  const [checkedList, setCheckedList] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const testList = [
    {
      name: "Blood Test 1",
      price: 300,
    },
    {
      name: "Blood Test 2",
      price: 400,
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(checkedList)
  }

  useEffect(() => {
    // Calculate total price when checkedList changes
    const total = checkedList.reduce((acc, curr) => acc + curr.price, 0)
    setTotalPrice(total)
  }, [checkedList])

  const handleCheckboxChange = (test) => {
    // Adding new test
    if (!checkedList.some((item) => item.name === test.name)) {
      setCheckedList([...checkedList, test])
    } else {
      // Removing duplicate test
      const updatedList = checkedList.filter((item) => item.name !== test.name)
      setCheckedList(updatedList)
    }
  }

  const handlePriceChange = (e, testName) => {
    let newValue = parseInt(e.target.value)
    if (isNaN(newValue)) {
      newValue = 0
    }
    const updatedList = checkedList.map((item) => (item.name === testName ? { ...item, price: newValue } : item))
    setCheckedList(updatedList)
  }

  return (
    <section className="py-16 bg-stone-100 font-poppins dark:bg-gray-800">
      <div className="flex flex-col justify-center items-center mx-auto md:w-1/2">
        <h2 className="py-4 text-xl font-bold">Create an Invoice</h2>
        <div className="w-full px-10 flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
          <Input label="Name" />
          <Input label="Contact No." />
          <Select>
            <Option>Doc 1</Option>
            <Option>Doc 2</Option>
            <Option>Doc 3</Option>
            <Option>Doc 4</Option>
          </Select>
        </div>
        <div className="w-full px-20">
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
        <div className="bg-indigo-200 w-4/5 px-10 pt-4 pb-10 rounded-lg">
          <div className="text-lg font-bold flex justify-between items-center space-x-8">
            <p>Test Name</p>
            <h2 className="text-xl font-bold">Total: {totalPrice}</h2>
            <p>Price</p>
          </div>
          <div className="bg-white py-[2px] w-full mb-4"></div>

          <form onSubmit={handleSubmit}>
            {checkedList.map((test, index) => (
              <div key={test.name} className="text-md font-bold flex justify-between items-center px-10">
                <p>
                  {" "}
                  {index + 1}. {test.name}
                </p>
                <div className="w-40">
                  <input
                    value={test.price}
                    key={test.name}
                    className="my-2 text-center"
                    onChange={(e) => handlePriceChange(e, test.name)}
                  />
                </div>
              </div>
            ))}
            <button type="submit" className="px-8 py-4 text-lg w-full text-center text-white font-bold bg-indigo-500">
              Create Invoice
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CreateInvoice
