import DoneAllIcon from "@mui/icons-material/DoneAll"
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors"
import CircularProgress from "@mui/material/CircularProgress"

import { useState } from "react"
import { Link } from "react-router-dom"

const TableRow = (props) => {
  const [loading, setLoading] = useState(false)
  const [btnText, setBtnText] = useState("Send SMS")
  const { invoiceId, name, classes, onSendSMS, completed, notified } = props.input

  const handleClick = (invoiceId) => {
    setLoading(true)
    setBtnText(<CircularProgress size={20} />)
    setTimeout(() => setBtnText("Done"), 2000)
    onSendSMS(invoiceId)
  }

  let actionBtn = null

  const successBtn = (
    <p className="py-2 text-left rounded-lg text-green-700  font-bold">
      Sent <DoneAllIcon />{" "}
    </p>
  )

  const processingText = (
    <p className=" py-2 text-center rounded-lg text-red-500 font-bold">
      Processing <RunningWithErrorsIcon />{" "}
    </p>
  )
  const sentSMSButton = (
    <button
      onClick={() => handleClick(invoiceId)}
      disabled={loading}
      className="px-4 py-3 text-white font-bold rounded-lg bg-blue-500"
    >
      {btnText}
    </button>
  )

  if (completed && !notified) {
    actionBtn = sentSMSButton
  }

  if (completed && notified) {
    actionBtn = successBtn
  }

  if (!completed) {
    actionBtn = processingText
  }

  return (
    <tr key={invoiceId}>
      <td className={classes}>{invoiceId}</td>
      <td className={classes}>{name}</td>
      <td className={classes + " flex justify-start items-start space-x-8"}>{actionBtn}</td>
      <td className={classes}>
        <Link className="bg-indigo-500 text-white px-2 py-1 rounded-md font-bold"> Details </Link>
      </td>
    </tr>
  )
}

export default TableRow
