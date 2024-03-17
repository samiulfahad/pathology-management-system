import { Input } from "@material-tailwind/react"
import Modal from "../../../components/Modal";
import React from "react"

const PatientData = (props) => {
  

  return (
    <Modal title="Patient's Info" onClose={props.onClose} onSubmit={props.onNext} actionText="Next">
      <form className="flex flex-col w-80 justify-start items-start py-10 space-y-4">
        <Input  label="Name of Patient" onChange={props.onChange} name="name" />
        <Input label="Age" onChange={props.onChange} type="number" name="age" />
        <Input label="Contact Number" onChange={props.onChange} type="number" name="contact" />
        <Input label="Referred By" onChange={props.onChange}  name="referredBy" />
      </form>
    </Modal>
  )
}

export default PatientData
