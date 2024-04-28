import React from "react"
import { Input, Select, Option } from "@material-tailwind/react"
import {} from "@mui/material"

const PatientData = (props) => {
  const { name, age, contact, referredBy, gender } = props.data
  return (
    <div className="w-full mx-auto flex flex-col gap-4 justify-between items-center">
      <h2 className="w-full mx-auto text-left text-2xl">Patient's Info</h2>
      <div className="w-full flex gap-4 justify-between">
        <Input label="Name" required value={name} name="name" onChange={props.onChange} />
        <Select
          label="Gender"
          name="gender"
          onChange={(val) => {
            let e = { target: { name: "", value: "" } }
            e.target.name = "gender"
            e.target.value = val
            props.onChange(e)
          }}
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
        <Input label="Age" required value={age} name="age" onChange={props.onChange} />
      </div>
      <div className="w-full flex gap-4 justify-between">
        <Input label="Contact" required type="number" value={contact} name="contact" onChange={props.onChange} />
        <Input label="Referred By" required value={referredBy} name="referredBy" onChange={props.onChange} />
      </div>
    </div>
  )
}

export default PatientData
