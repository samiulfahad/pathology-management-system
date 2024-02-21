import React from "react"
import AssessmentIcon from "@mui/icons-material/Assessment"
import { Link } from "react-router-dom"

const ViewReports = () => {
  return (
    <Link className="text-gray-900 flex flex-wrap justify-center items-center w-2/3 font-bold border-2 rounded border-cyan-500 p-2 hover:bg-cyan-500 hover:text-white duration-100">
      {" "}
      Reports <AssessmentIcon />
    </Link>
  )
}

export default ViewReports
