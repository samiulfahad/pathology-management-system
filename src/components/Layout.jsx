import React from "react"
import { Link, NavLink } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import AddIcon from "@mui/icons-material/Add"
import BorderAllIcon from "@mui/icons-material/BorderAll"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import PaymentsIcon from "@mui/icons-material/Payments"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import CableIcon from "@mui/icons-material/Cable"
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications"
import SmsIcon from "@mui/icons-material/Sms"

const Layout = (props) => {
  return (
    <section id="layout" className={`bg-gray-100 ${props.className} min-h-screen`}>
      <div className="flex justify-start items-center">
        <div className="bg-blue-gray-500 fixed top-0 left-0 hidden md:flex flex-wrap  h-screen w-80 text-center text-white font-bold flex-col space-y-4 pt-12">
          <Link to={"/"} className="pt-4 pb-8 text-2xl font-bold">
            Lab Manager
          </Link>

          <NavLink to={"/"} className="nav-btn">
            {" "}
             Overview
          </NavLink>
          <NavLink to={"/invoice/create"} className="nav-btn">
            {" "}
           Create Invoice
          </NavLink>
          <NavLink to={"/invoice/all"} className="nav-btn">
            {" "}
            All Invoices
          </NavLink>
          <NavLink to={"/print"} className="nav-btn">
            {" "}
            Print
          </NavLink>
          <NavLink to={"/upload-report"} className="nav-btn">
            {" "}
            Upload Report
          </NavLink>
          <NavLink to={"/send-sms"} className="nav-btn">
            {" "}
           Send SMS
          </NavLink>
          <NavLink to={"/price-list"} className="nav-btn">
            {" "}
             Price List
          </NavLink>

          <NavLink to={"/references"} className="nav-btn">
            {" "}
             References
          </NavLink>
          <NavLink to={"/doctors"} className="nav-btn">
            {" "}
             Doctors
          </NavLink>
          <NavLink to={"/manage-profile"} className="nav-btn">
            {" "}
            Manage Account
          </NavLink>
        </div>
      </div>
      <div className={`md:ml-80 ${props.className}`}>{props.children}</div>
    </section>
  )
}

export default Layout
