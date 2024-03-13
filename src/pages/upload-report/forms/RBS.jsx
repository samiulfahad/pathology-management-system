import { Input } from "@material-tailwind/react"
import React from "react"

const RBS = () => {
  return (
    <section>
      <h2 className="w-full text-center py-4 text-2xl font-bold">RBC Report</h2>
      <form className="flex flex-col justify-center items-center space-y-4 p-8 w-80 mx-auto bg-gray-300 ">
        <Input label="White Blood Cell" />
        <Input label="Neutrophil" />
        <Input label="Lymphosite" />
        <Input label="Monocyte" />
        <Input label="Basophil" />
        <button className="btn">Upload</button>
      </form>
    </section>
  )
}

export default RBS
