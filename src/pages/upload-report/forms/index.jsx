import React from "react"
import CBC from "./CBC"
import RBS from "./RBS"
import { useParams } from "react-router-dom"
const index = () => {
  const {testName, id} = useParams()
  console.log(testName, id);
  return (
    <section className="w-2/3 mx-auto">
      {testName === "cbc" ? <CBC/> : null}
      {testName === "rbs" ? <RBS/> : null}
    </section>
  )
}

export default index
