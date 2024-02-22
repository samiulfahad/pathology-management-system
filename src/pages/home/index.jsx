
import { Input } from "@material-tailwind/react"
import React from "react"
import { Link } from "react-router-dom"

const index = () => {
  return (
    <section className="bg-slate-200">
      <div className="flexCol space-y-4">
      <div className="w-72">
      <Input label="Search an Invoice" color="blue" />
    </div>
        <div className="space-x-8">
          <Link to={"/create-invoice"} className="btn">
            Create Invoice
          </Link>
          <Link to={"/invoices"} className="btn">
            Download Reports
          </Link>
        </div>
        <div className="space-x-8">
          <Link to={"/reports"} className="btn">
            Upload Reports
          </Link>
          <Link to={"/"} className="btn">
            Collect Payment
          </Link>
          <Link to={"/"} className="btn">
            Deliver Reports
          </Link>
        </div>
        
      </div>
    </section>
  )
}

export default index
