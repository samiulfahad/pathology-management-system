import React from "react"
import { Link } from "react-router-dom"

import Delivery from "./Delivery"
import Payment from "./Payment"

const TableRow = (props) => {
  const { _id, invoiceId, name, netAmount, paid, completed, delivered, onDelivery, onCollect, classes } = props.input
  const status = completed ? (
    <span className="text-white p-1 bg-green-500">Ready</span>
  ) : (
    <span className="font-semibold italic text-sm bg-red-600 p-1 text-white">Processing</span>
  )

  return (
    <tr key={_id}>
      <td className={classes}>{invoiceId}</td>
      <td className={classes}>{name}</td>
      <Payment netAmount={netAmount} invoiceId={invoiceId} _id={_id} paid={paid} onCollect={onCollect} classes={classes} />
      <td className={classes}>{status}</td>
      <td className={classes}>
        <Link className="bg-indigo-500 text-white px-3 py-2 rounded-md font-bold">Reports</Link>
      </td>
      <Delivery _id={_id} delivered={delivered} onDelivery={onDelivery} classes={classes} />
      <td className={classes}>
      <Link to={`/invoice/edit/${_id}`} className="bg-indigo-500 text-white px-3 py-2 rounded-md font-bold">Edit</Link>

      </td>
    </tr>
  )
}

export default TableRow
