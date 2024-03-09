import DoneAllIcon from "@mui/icons-material/DoneAll"
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors"
import CircularProgress from "@mui/material/CircularProgress"

import { useState } from "react"
import { Link } from "react-router-dom"

const TableRow = (props) => {
  const [loading, setLoading] = useState(false)
  const [btnText, setBtnText] = useState("Send SMS")
  const { id, name, classes, onSendSMS, totalTest, completed, notified } = props.input

  const handleClick = (id) => {
    setLoading(true)
    setBtnText(<CircularProgress size={20} />)
    setTimeout(() => setBtnText("Done"), 2000)
    // setTimeout(() => setBtnText(<p className="text-red-900">Failed</p>), 4000)
  }

  const isReady = parseInt(totalTest) === parseInt(completed) ? true : false
  let actionBtn = null

  const successBtn = (
    <p className="py-2 text-left rounded-lg text-green-700  font-bold">
      Done <DoneAllIcon />{" "}
    </p>
  )

  const processingText = (
    <p className=" py-2 text-center rounded-lg text-red-500 font-bold">
      Processing <RunningWithErrorsIcon />{" "}
    </p>
  )
  const sentSMSButton = (
    <button
      onClick={() => handleClick(id)}
      disabled={loading}
      className="px-4 py-3 text-white font-bold rounded-lg bg-blue-500"
    >
      {btnText}
    </button>
  )

  if (isReady && !notified) {
    actionBtn = sentSMSButton
  }

  if (isReady && notified) {
    actionBtn = successBtn
  }

  if (!isReady) {
    actionBtn = processingText
  }

  return (
    <tr key={id}>
      <td className={classes}>{id}</td>
      <td className={classes}>{name}</td>
      <td className={classes + " flex justify-start items-start space-x-8"}>{actionBtn}</td>
      <td className={classes}>
        <Link className="bg-indigo-500 text-white px-2 py-1 rounded-md font-bold"> Details </Link>
      </td>
    </tr>
  )
}

export default TableRow
