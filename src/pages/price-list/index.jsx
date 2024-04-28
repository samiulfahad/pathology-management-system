import React, { useState } from "react"

import Layout from "../../components/Layout"
import Test from "./Test"

const index = () => {
  const [testList, setTestList] = useState([
    { testName: "CBC", price: 200 },
    { testName: "RBS", price: 300 },
    { testName: "ECG", price: 100 },
  ])

  const handlePriceChange = (testName, newPrice) => {
    const updatedTestList = testList.map((item) => {
      if (item.testName === testName) {
        item.price = newPrice
      }
      return item
    })
    setTestList(updatedTestList) // Correct usage of setTestList
  }

  return (
    <Layout>
      <section>
        <div className="w-full">
          <p className="text-left ml-40 text-2xl mt-20">Price List of Tests</p>
          {testList.map((item) => (
            <Test key={item.testName} testName={item.testName} price={item.price} onPriceChange={handlePriceChange} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default index
