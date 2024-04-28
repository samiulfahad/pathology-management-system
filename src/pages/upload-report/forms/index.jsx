import React from "react"
import CBC from "./CBC"
import RBS from "./RBS"
import { useParams } from "react-router-dom"
import Layout from "../../../components/Layout"
const index = () => {
  const { testName, id } = useParams()
  console.log(testName, id)
  return (
    <Layout>
      <section>
        {testName === "CBC" ? <CBC /> : null}
        {testName === "RBS" ? <RBS /> : null}
      </section>
    </Layout>
  )
}

export default index
