import React from "react"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout"
import InvoiceList from "../overview"
import Overview from "../overview"

const Index = () => {
  return (
    <Layout>
      <section className="bg-gray-100 min-h-screen w-full -ml-80">
        <div className="flex flex-col justify-center items-center mt-16 w-full">
          {/* Sale Stat */}
          <h1 className="text-2xl font-bold">Sale Stat</h1>
          <div className="flex flex-wrap gap-4 justify-start items-center text-md">
            <div className="px-10 py-4  rounded-md bg-indigo-500 font-bold text-white">
              <p>Today's Sale</p>
              <p className="text-2xl">৳252</p>
            </div>

            <div className="px-10 py-4 rounded-md bg-indigo-500 font-bold text-white">
              <p>This Month</p>
              <p className="text-2xl">৳50001</p>
            </div>
            <div className="px-10 py-4 rounded-md bg-indigo-500 font-bold text-white">
              <p>Total Due</p>
              <p className="text-2xl">৳2820</p>
            </div>
          </div>

          {/* Test stat */}
          <div className="flex flex-wrap justify-start items-start gap-4 text-md py-4">
            <div className="px-10 py-4  rounded-md bg-indigo-500 font-bold text-white">
              <p>Today's Test</p>
              <p className="text-2xl">52</p>
            </div>

            <div className="px-10 py-4 rounded-md bg-indigo-500 font-bold text-white">
              <p>Completed</p>
              <p className="text-2xl">30</p>
            </div>
            <div className="px-10 py-4 rounded-md bg-indigo-500 font-bold text-white">
              <p>Remaining</p>
              <p className="text-2xl">22</p>
            </div>
          </div>

          {/* <div className="w-full -mt-4">
            <Overview />
          </div> */}
        </div>
      </section>
    </Layout>
  )
}

export default Index
