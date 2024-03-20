import { Switch } from "@mui/material"
import DoneAllIcon from "@mui/icons-material/DoneAll"
import PaymentsIcon from "@mui/icons-material/Payments"
import { Link } from "react-router-dom"

const TableRow = (props) => {
  const { invoiceId, name, netAmount, paid, completed, delivered, onDelivery, onCollect, classes } = props.input

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

  return (
    <tr key={invoiceId}>
      <td className={classes}>{invoiceId}</td>
      <td className={classes}>{name}</td>
      <td className={classes}>{payment}</td>
      <td className={classes}>{status}</td>
      <td className={classes}>
        <Link className="bg-indigo-500 text-white px-2 py-1 rounded-md font-bold"> Reports </Link>
      </td>
      <td className={classes}>
        No
        <Switch checked={delivered} onChange={() => onDelivery(invoiceId)} />
        Yes
      </td>
    </tr>
  )
}

export default TableRow
