// import React, { useState } from "react"
// import Modal from "./Modal"

// const TableRaw = ({ id, totalAmount, initialPayment }) => {
// const [modal, setModal] = useState(false)

// const collectDue =
//   totalAmount - initialPayment > 0 ? (
//     <button
//       onClick={() => setModal(true)}
//       className="px-4 py-2 bg-green-600 hover:bg-gray-400 text-white font-bold transition duration-300"
//     >
//       Collect Due
//     </button>
//   ) : (
//     <p className="px-4 py-2 bg-indigo-500 text-white font-bold w-1/2 mx-auto text-center">Paid</p>
//   )
//   return (
//     <>
// {modal && <Modal totalAmount={totalAmount} initialPayment={initialPayment} onClose={()=> setModal(false)}/>}
//       <tr className="hover:bg-indigo-100 font-bold transition duration-300">
//         <td className="py-4 px-6">{id}</td>
//         <td className="py-4 px-6">{totalAmount}</td>
//         <td className="py-4 px-6">{initialPayment}</td>
//         <td className="py-4 px-6 text-red-500">{totalAmount - initialPayment}</td>
//         <td className="py-4 px-6 text-center">{collectDue}</td>
//       </tr>
//     </>
//   )
// }

// export default TableRaw

import React, { useState } from "react"
import Modal from "./Modal"

const TableRow = ({ id, name, totalAmount, initialPayment, classes }) => {
  const [modal, setModal] = useState(false)

  const action =
    totalAmount - initialPayment > 0 ? (
      <button
        onClick={() => setModal(true)}
        className="px-4 py-2 bg-orange-600 hover:bg-gray-400 text-white font-bold rounded-md transition duration-300"
      >
        Collect
      </button>
    ) : (
      <button className="px-4 py-2 mx-auto text-center w-1/2 text-green-500 font-bold">Paid</button>
    )

  return (
    <>
      {modal && <Modal totalAmount={totalAmount} initialPayment={initialPayment} onClose={() => setModal(false)} />}
      <tr key={id}>
        <td className={classes}>{id}</td>
        <td className={classes}>{name}</td>
        <td className={classes + " text-xl "}>৳{totalAmount}</td>
        <td className={classes}>
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-col">
              <p className="text-sm">Paid - ৳{initialPayment}</p>
              <p className="text-sm font-bold text-red-600">Due - ৳{totalAmount - initialPayment}</p>
            </div>
          </div>
        </td>

        <td className={classes}>{action}</td>
      </tr>
    </>
  )
}

export default TableRow
