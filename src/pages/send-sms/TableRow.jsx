import DoneAllIcon from "@mui/icons-material/DoneAll"

import { useState } from "react"
import { Link } from "react-router-dom"
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors"
import ReplayIcon from "@mui/icons-material/Replay"

import LoadingIcon from "../../components/LoadingIcon"

const TableRow = (props) => {
  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)
  const { _id, invoiceId, name, classes, onSendSMS, completed, notified } = props.input

  const handleClick = async () => {
    setLoading(true)
    const success = await onSendSMS(_id)
    if (success) {
      setLoading(false)
      setFailed(false)
    } else {
      setFailed(true)
      setTimeout(() => setLoading(false), 5000)
    }
  }

  const alreadySent = (
    <p className="py-2 text-left rounded-lg text-green-700  font-bold">
      Sent <DoneAllIcon />{" "}
    </p>
  )

  const sentSMSButton = (
    <button
      onClick={() => handleClick(invoiceId)}
      disabled={notified}
      className="px-4 py-3 text-white font-bold rounded-lg bg-blue-500"
    >
      {failed ? (
        <p className="text-red-500">
          Retry <ReplayIcon />
        </p>
      ) : (
        "Send SMS"
      )}
    </button>
  )

  return (
    <tr key={invoiceId}>
      <td className={classes}>{invoiceId}</td>
      <td className={classes}>{name}</td>
      <td className={classes}>
        {!loading && completed && notified ? alreadySent : null}
        {!loading && completed && !notified ? sentSMSButton : null}
        {loading && <LoadingIcon />}
        {!loading && !completed && (
          <p className="text-red-700 font-bold">
            Not Ready <RunningWithErrorsIcon />
          </p>
        )}
      </td>
      <td className={classes}>
        <Link className="bg-indigo-500 text-white px-2 py-1 rounded-md font-bold"> Details </Link>
      </td>
    </tr>
  )
}

export default TableRow
