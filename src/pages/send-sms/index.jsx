import React, { useState } from "react"


import TableRow from "./TableRow"

const data = [
  { id: 1, totalTest: 10, completed: 8, name: "Roton", notified: false },
  { id: 2, totalTest: 7, completed: 4, name: "Rono",  notified: false },
  { id: 3, totalTest: 6, completed: 6, name: "Rahul",  notified: false },
  { id: 4, totalTest: 5, completed: 5, name: "Hasan",  notified: false },
  { id: 5, totalTest: 12, completed: 12, name: "Fahad",  notified: true },
]

const SendSMS = () => {
  

  const onSendSMS = id =>{
    
  }

  const TABLE_HEAD = ["Invoice ID", "Name", "Action", "Details"]
  return (
    <section>
      <table className="w-full mx-auto bg-indigo-50 min-w-max table-auto text-left md:w-2/3 md:mt-6">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-500 text-white bg-indigo-500 p-4">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, totalTest, completed, notified }, index) => {
            const isLast = index === data.length - 1
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-500"
            const input = { id, name, totalTest, completed, notified, classes, onSendSMS }
            return <TableRow key={id} input={input} />
          })}
        </tbody>
      </table>
    </section>
  )
}

export default SendSMS
