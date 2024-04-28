import React from "react"
import { Link } from "react-router-dom"

const Status = ({ test }) => {
  const status = test.completed ? (
    <Link className="px-4 py-2 font-semibold rounded-lg bg-indigo-400 text-white">Download</Link>
  ) : (
    <p className="italic text-red-500">Processing</p>
  )
  return status
}

export default Status
