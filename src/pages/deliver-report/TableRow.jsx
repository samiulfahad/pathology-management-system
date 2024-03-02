import { Switch } from "@mui/material"
import React, { useState } from "react"

const TableRow = ({ id, name, contact, delivered, classes }) => {
  const [isDelivered, setIsDelivered] = useState(delivered)
  const deliveryH = e => {
    setIsDelivered(old => !old)
  }
  return (
    <tr key={id}>
      <td className={classes}>{id}</td>
      <td className={classes}>{name}</td>
      <td className={classes}>{contact}</td>
      <td className={classes}>
        No
        <Switch checked={isDelivered} onChange={deliveryH} />
        Yes
      </td>
    </tr>
  )
}

export default TableRow
