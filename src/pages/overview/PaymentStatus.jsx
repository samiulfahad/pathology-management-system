import React from "react"
import DangerousIcon from "@mui/icons-material/Dangerous"

const PaymentStatus = ({ totalAmount, paid }) => {
  let isPaid = parseFloat(totalAmount) == parseFloat(paid)
  const paidText = (
    <div className="px-4 py-2 text-center mx-left w-1/2 font-bold text-white bg-green-500 rounded-md">Paid</div>
  )
  const dueText = (
    <div className="flex flex-col justify-start items-start text-red-800 font-bold">
      <div className="flex">
        <DangerousIcon />
        <p>Due - {parseFloat(totalAmount) - parseFloat(paid)}</p>
      </div>
      <p className="text-black text-[12px]">Total - {totalAmount}</p>
    </div>
  )
  const text = isPaid ? paidText : dueText

  return <div>{text}</div>
}

export default PaymentStatus
