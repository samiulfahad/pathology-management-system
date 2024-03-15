import React from "react"
import { Input } from "@material-tailwind/react"

const PatientData2 = (props) => {
    const  {name, age, contact, referredBy} = props.data
  return (
    <div className="w-full mx-auto flex flex-col gap-4 justify-between items-center">
      <h2 className="w-full mx-auto text-left text-2xl">Patient's Info</h2>
      <div className="w-full flex gap-4 justify-between">
        <Input label="Name" value={name} name="name" onChange={props.onChange} />
        <Input label="Age" value={age} name="age" onChange={props.onChange} />
      </div>
      <div className="w-full flex gap-4 justify-between">
        <Input label="Contact" value={contact} name="contact" onChange={props.onChange} />
        <Input label="Referred By" value={referredBy} name="referredBy" onChange={props.onChange} />
      </div>
    </div>
  )
}

export default PatientData2
