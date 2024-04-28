import React from "react"

import Layout from "../../components/Layout"
import PaymentStatus from "./PaymentStatus"
import DeliveryStatus from "./DeliveryStatus"
import ViewReports from "./ViewReports"

const Overview = ({ title }) => {
  const LIST = [
    {
      id: 123,
      name: "Roton Mollah",
      age: 32,
      referredBy: "Dr. XXXX",
      contact: "017254568132",
      totalTest: 5,
      totalAmount: 2000,
      paid: 1500,
      testList: [
        { name: "cbc", completed: false },
        { name: "rbs", completed: false },
        { name: "xray", completed: false },
        { name: "lipid profile", completed: true },
        { name: "Blood sample test", completed: true },
      ],
      delivered: false,
    },
    {
      id: 124,
      name: "Roton Mollah 2",
      age: 32,
      referredBy: "Dr. YYY",
      contact: "017254568132",
      totalTest: 3,
      totalAmount: 1400,
      paid: 1000,
      testList: [
        { name: "cbc", completed: false },
        { name: "rbs", completed: true },
        { name: "Blood sample test", completed: true },
      ],
      delivered: false,
    },
    {
      id: 125,
      name: "Roton Mollah 3",
      age: 35,
      referredBy: "Dr. ZZZ",
      contact: "017254568132",
      totalTest: 2,
      totalAmount: 600,
      paid: 600,
      testList: [
        { name: "cbc", completed: true },
        { name: "rbs", completed: true },
      ],
      delivered: true,
    },
  ]

  return (
    <Layout>
      <section className="bg-gray-100 pb-20 mt-10 mb-20 w-full ">
        <div className="text-3xl font-bold text-center">{title}</div>
        <div className="md:w-2/3 mx-auto">
          <table className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <thead className="text-white bg-gray-800">
              <tr>
                <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Invoice ID</th>
                <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Patient's Name</th>
                <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Payment</th>
                <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Reports</th>
                <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Delivered</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {LIST.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="py-4 px-6 border-b text-left">{item.id}</td>
                  <td className="py-4 px-6 border-b text-left">{item.name}</td>
                  <td className="py-4 px-6 border-b text-left">
                    <PaymentStatus totalAmount={item.totalAmount} paid={item.paid} />
                  </td>
                  <td className="py-4 px-6 border-b text-left">
                    <ViewReports />
                  </td>
                  <td className="py-4 px-6 border-b text-left">
                    <DeliveryStatus status={item.delivered} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  )
}

export default Overview
