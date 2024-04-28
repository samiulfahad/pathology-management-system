import React, { useState } from "react"
import PatientData from "../create/PatientData"
import { useParams } from "react-router-dom"

const index = () => {
  const [data, setData] = useState({
    name: "Samiul Fahad",
    age: 27,
    contact: "01723939836",
    referredBy: "Dr. Strange",
    gender: "male",
  })
  const { _id } = useParams()
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = () => {
    console.log(data)
  }

  return (
    <div className="w-1/2 mt-20 mx-auto">
      <PatientData data={data} onChange={handleChange} />
      <button onClick={handleSubmit} className="btn mt-8 mx-auto text-center w-full">
        Save
      </button>
    </div>
  )
}

export default index
