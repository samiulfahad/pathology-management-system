import { Input } from "@material-tailwind/react"
import React from "react"

const Form = (props) => {
  return (
    <form className="flex flex-col justify-start items-start">
        
      <p className="text-sm font-bold py-4 text-red-500">Due:{props.dueAmount}</p>
      <div className="pb-10">
        <Input label="Amount" type="number" name="dueAmount" value={props.dueAmount} readOnly disabled />
      </div>
    </form>
  )
}

export default Form
