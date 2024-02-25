import { SetMeal } from "@mui/icons-material"
import React, { useState } from "react"
import Modal from "./Modal"

const TableRaw = ({ id, totalAmount, initialPayment }) => {
  const [modal, setModal] = useState(false)

  const collectDue =
    totalAmount - initialPayment > 0 ? (
      <button
        onClick={() => setModal(true)}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition duration-300"
      >
        Collect Due
      </button>
    ) : (
      "Okay"
    )
  return (
    <>
    {modal && <Modal totalAmount={totalAmount} initialPayment={initialPayment} onClose={()=> setModal(false)}/>}
      <tr className="hover:bg-indigo-100 font-bold transition duration-300">
        <td className="py-4 px-6">{id}</td>
        <td className="py-4 px-6">{totalAmount}</td>
        <td className="py-4 px-6">{initialPayment}</td>
        <td className="py-4 px-6 text-red-500">{totalAmount - initialPayment}</td>
        <td className="py-4 px-6 text-center">{collectDue}</td>
      </tr>
    </>
  )
}

export default TableRaw
