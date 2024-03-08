import { Input } from "@material-tailwind/react"
import React from "react"

const Form = (props) => {
  const { name, degree, contact } = props.data; // Destructure data object
  return (
    <section>
      <form className="py-10 flex flex-col space-y-4">
        <Input label="Name" name="name" onChange={props.onChange} value={name} /> 
        <Input label="Degree" name="degree" onChange={props.onChange} value={degree} /> 
        <Input label="Contact No" name="contact" type="number" onChange={props.onChange} value={contact} /> 
      </form>
    </section>
  )
}

export default Form
