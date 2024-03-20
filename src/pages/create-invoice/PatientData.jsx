import React from "react"
import { Input } from "@material-tailwind/react"

const PatientData = (props) => {
  const { name, age, contact, referredBy } = props.data
  return (
    <div className="w-full mx-auto flex flex-col gap-4 justify-between items-center">
      <h2 className="w-full mx-auto text-left text-2xl">Patient's Info</h2>
      <div className="w-full flex gap-4 justify-between">
        <Input label="Name" required value={name} name="name" onChange={props.onChange} />
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

//////////////////////////// Redux Toolkit /////////////////////////////

// import React from "react"
// import { Input } from "@material-tailwind/react"
// import { useDispatch, useSelector } from "react-redux"
// import { setName, setAge, setContact, setReferredBy } from "../../store/invoiceSlice"

// const PatientData = () => {
//   const data = useSelector((state) => state.invoice.patientData)
//   const { name, age, contact, referredBy } = data
//   console.log(data)
//   const dispatch = useDispatch()
//   return (
//     <div className="w-full mx-auto flex flex-col gap-4 justify-between items-center">
//       <h2 className="w-full mx-auto text-left text-2xl">Patient's Info</h2>
//       <div className="w-full flex gap-4 justify-between">
//         <Input label="Name" required value={name} onChange={(e) => dispatch(setName(e.target.value))} />
//         <Input label="Age" required value={age} onChange={(e) => dispatch(setAge(e.target.value))} />
//       </div>
//       <div className="w-full flex gap-4 justify-between">
//         <Input
//           label="Contact"
//           required
//           type="number"
//           value={contact}
//           onChange={(e) => dispatch(setContact(e.target.value))}
//         />
//         <Input
//           label="Referred By"
//           required
//           value={referredBy}
//           onChange={(e) => dispatch(setReferredBy(e.target.value))}
//         />
//       </div>
//     </div>
//   )
// }

// export default PatientData
