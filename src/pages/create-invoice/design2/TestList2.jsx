import { Checkbox } from "@material-tailwind/react"
import Modal from "../../../components/Modal"
import React from "react"

const TestList = (props) => {


  return (
    <Modal title="Select Tests" onClose={props.onClose} onSubmit={props.onNext} actionText="Next">
      <div className="flex flex-wrap justify-start items-center">
        {props.list.map((test) => (
          <Checkbox key={test.name} label={test.name} value={test.name} onChange={() => props.onChange(test)} />
        ))}
      </div>
    </Modal>
  )
}

export default TestList
