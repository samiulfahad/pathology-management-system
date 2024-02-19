
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
            Create New Invoice
          </Link>
          <Link to={"/create-invoice"} className="btn">
            All Invoices
          </Link>
        </div>
        <div className="space-x-8">
          <Link to={"/create-invoice"} className="btn">
            Test List
          </Link>
          <Link to={"/create-invoice"} className="btn">
            Add New Test
          </Link>
        </div>
        <div className="space-x-8">
          <Link to={"/create-invoice"} className="btn">
            Referred Doctor List
          </Link>
          <Link to={"/create-invoice"} className="btn">
            Add Doctor
          </Link>
        </div>
      </div>
    </section>
  )
}

export default index
