import { Switch } from "@mui/material"
import DoneAllIcon from "@mui/icons-material/DoneAll"
import PaymentsIcon from "@mui/icons-material/Payments"
import { Link } from "react-router-dom"
import { useState } from "react"
import LoadingIcon from "../../components/LoadingIcon"

const TableRow = (props) => {
  const { _id, invoiceId, name, netAmount, paid, completed, delivered, onDelivery, onCollect, classes } = props.input
  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)

  const handleDelivery = async () => {
    setLoading(true)
    const success = await onDelivery(_id)
    if (success) {
      setLoading(false)
      setFailed(false)
    } else {
      setFailed(true)
      setTimeout(() => setLoading(false), 6000)
    }
  }

  let payment =
    parseFloat(netAmount) === parseFloat(paid) ? (
      <p className="font-bold text-green-500">
        Paid <DoneAllIcon />
      </p>
    ) : (
      <div>
        <p className="font-semibold text-red-500">Due- ৳{parseFloat(netAmount) - parseFloat(paid)}</p>
        <button
          onClick={() => onCollect(invoiceId, netAmount, paid)}
          className="px-3 py-2 font-bold text-white bg-blue-400"
        >
          Collect <PaymentsIcon />
        </button>
      </div>
    )

  const status = completed ? (
    <p className="text-indigo-700">Ready</p>
  ) : (
    <p className="font-semibold italic text-sm text-red-500">Processing</p>
  )

  const deliverBtn = delivered ? (
    <span className="bg-green-500 text-white p-1 rounded-md"> Delivered </span>
  ) : (
    <div className="flex justify-start items-center font-bold"> 
      <Switch checked={delivered} disabled={delivered} onChange={handleDelivery} /> {failed ? <p className="text-red-500">Retry</p> : "Yes"}
    </div>
  )

  return (
    <tr key={_id}>
      <td className={classes}>{invoiceId}</td>
      <td className={classes}>{name}</td>
      <td className={classes}>{payment}</td>
      <td className={classes}>{status}</td>
      <td className={classes}>
        <Link className="bg-indigo-500 text-white px-3 py-2 rounded-md font-bold"> Reports </Link>
      </td>
      <td className={classes}>
        {" "}
        {loading && !failed ? (
          <div className="w-full mx-auto flex justify-start items-center">
            <LoadingIcon />{" "}
          </div>
        ) : (
          deliverBtn
        )}{" "}
      </td>
    </tr>
  )
}

export default TableRow
