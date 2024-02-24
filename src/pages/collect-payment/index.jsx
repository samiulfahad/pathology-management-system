import React from "react"
import TableRaw from "./TableRaw"

const CollectPayment = () => {
  const data = [
    {
      id: 123456,
      totalAmount: 500,
      initialPayment: 500,
    },
    {
      id: 123654,
      totalAmount: 500,
      initialPayment: 500,
    },
    {
      id: 12365,
      totalAmount: 500,
      initialPayment: 400,
    },
    {
      id: 1234566,
      totalAmount: 500,
      initialPayment: 200,
    },
  ]
  return (
    <section className="bg-gray-300 h-screen flex flex-col justify-start items-center">
      <h1 className="py-10 text-center font-bold text-3xl text-indigo-600">Payment Collection</h1>
      <div className="w-full md:w-2/5 overflow-hidden">
        <table className="w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-4 px-6 text-left">Invoice Id</th>
              <th className="py-4 px-6 text-left">Total Amount</th>
              <th className="py-4 px-6 text-left">Paid</th>
              <th className="py-4 px-6 text-left">Due</th>
              <th className="py-4 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
           {data.map(item => <TableRaw key={item.id} id={item.id} totalAmount={item.totalAmount} initialPayment={item.initialPayment} />)}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default CollectPayment
