import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"

const TableRow = ({ id, name, degree, classes, onEdit, onDelete }) => {
  return (
    <tr key={id}>
      <td className={classes}>{name}</td>
      <td className={classes}>{degree}</td>

      <td className={classes + " flex justify-start items-start space-x-8"}>
        <button className="text-red-500" onClick={() => onDelete(id)}>
          Delete <DeleteIcon />
        </button>
        <button className="" onClick={() => onEdit(id)}>
          Edit <EditIcon />{" "}
        </button>
      </td>
    </tr>
  )
}

export default TableRow
