import { Switch } from "@mui/material"
import DoneAllIcon from "@mui/icons-material/DoneAll"
import PaymentsIcon from "@mui/icons-material/Payments"
import { Link } from "react-router-dom"

const TableRow = (props) => {
  const { id, name, totalAmount, paid, totalTest, completed, delivered, onDelivery, onCollect, classes } = props.input

  let payment =
    parseFloat(totalAmount) === parseFloat(paid) ? (
      <p className="font-bold text-green-500">
        Paid <DoneAllIcon />
      </p>
    ) : (
      <div>
        <p className="font-semibold text-red-500">Due- ৳{parseFloat(totalAmount) - parseFloat(paid)}</p>
        <button onClick={()=> onCollect(id, totalAmount, paid)} className="px-3 py-2 font-bold text-white bg-blue-400">
          Collect <PaymentsIcon />
        </button>
      </div>
    )

  const status =
    parseInt(totalTest) === parseInt(completed) ? (
      <p className="text-indigo-700">Ready</p>
    ) : (
      <p className="font-semibold italic text-sm text-red-500">Processing</p>
    )

  return (
    <tr key={id}>
      <td className={classes}>{id}</td>
      <td className={classes}>{name}</td>
      <td className={classes}>{payment}</td>
      <td className={classes}>{status}</td>
      <td className={classes}>
        <Link className="bg-indigo-500 text-white px-2 py-1 rounded-md font-bold"> Reports </Link>
      </td>
      <td className={classes}>
        No
        <Switch checked={delivered} onChange={() => onDelivery(id)} />
        Yes
      </td>
    </tr>
  )
}

export default TableRow
