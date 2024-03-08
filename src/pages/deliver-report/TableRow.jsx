import { Switch } from "@mui/material"

const TableRow = (props) => {
  const {id, name, contact, delivered, handleDelivery, classes} = props.data
  return (
    <tr key={id}>
      <td className={classes}>{id}</td>
      <td className={classes}>{name}</td>
      <td className={classes}>{contact}</td>
      <td className={classes}>
        No
        <Switch checked={delivered} onChange={() => handleDelivery(id)} />
        Yes
      </td>
    </tr>
  )
}

export default TableRow
