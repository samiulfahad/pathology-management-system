import { Input } from "@material-tailwind/react"
import Modal from "../../components/Modal";
import React from "react"

const TestList = (props) => {
  

  return (
    <Modal title="Select Tests" onClose={props.onClose} onSubmit={props.onNext} actionText="Next">
      <form className="flex flex-col justify-start items-start py-10 space-y-4">
        <Input label="Name of Patient" onChange={props.onChange} name="name" />
        <Input label="Age" onChange={props.onChange} type="number" name="age" />
        <Input label="Contact Number" onChange={props.onChange} type="number" name="contact" />
        <Input label="Referred By" onChange={props.onChange}  name="referredBy" />
        {/* <Select label="Referred By" name="referredBy" onChange={props.onChange}>
          <Option>Doc 1</Option>
          <Option>Doc 2</Option>
          <Option>Doc 3</Option>
          <Option>Doc 4</Option>
        </Select> */}
      </form>
    </Modal>
  )
}

export default TestList
