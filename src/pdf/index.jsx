import React from "react"
import Invoice from "./invoice"
import CBC from "./cbc"
import RBS from "./rbs"
import Layout from "../components/Layout"
import { useParams } from "react-router-dom"

const index = () => {
  const { invoiceId } = useParams()
  const singlePrint = () => {}
  return (
    <div>
      <Layout className="bg-white !min-h-0"></Layout>
      <section className="w-full mx-auto ">
        <div id="cbc">
          <CBC printSingle={singlePrint} />
        </div>
        <div id="rbs">
          <RBS printSingle={singlePrint} />
        </div>
        <div id="invoice">
          <Invoice />
        </div>
      </section>
    </div>
  )
}

export default index
