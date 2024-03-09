import React from "react"
import { Input } from "@material-tailwind/react"

const PaymentForm = ({totalAmount, paid, due, enteredAmount, onChange}) => {
  return (
      <div className="flex flex-col justify-start items-start py-10">
        <p>Total Amount: {totalAmount} </p>
        <p>Paid: {paid}</p>
        <p className="text-red-500 pb-4">Due: {due}</p>
        <Input label="Amount" value={enteredAmount} size="lg" onChange={onChange} />
      </div>
  )
}

export default PaymentForm
