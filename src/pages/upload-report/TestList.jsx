import React from "react"
import Layout from "../../components/Layout"
import Test from "./Test"

const TestList = () => {
  const testList = [
    { name: "CBC", completed: 10, uncompleted: 3 },
    { name: "RBS", completed: 20, uncompleted: 5 },
    { name: "XRAY", completed: 25, uncompleted: 5 },
    { name: "ECG", completed: 40, uncompleted: 30 },
    { name: "ULTRA", completed: 30, uncompleted: 23 },
    { name: "CBC2", completed: 10, uncompleted: 3 },
    { name: "RBS2", completed: 20, uncompleted: 5 },
    { name: "XRAY2", completed: 25, uncompleted: 5 },
    { name: "ECG2", completed: 40, uncompleted: 30 },
    { name: "ULTRA2", completed: 30, uncompleted: 23 }
  ]
  return (
    <Layout>
    <div className="flex flex-wrap gap-4 justify-center items-center w-full h-screen content-center bg-blue-gray-200">
      {testList.map((item) => (
        <Test key={item.name} name={item.name} completed={10} uncompleted={2} />
      ))}
    </div>
    </Layout>
  )
}

export default TestList
