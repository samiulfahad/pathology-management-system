import DoneAllIcon from "@mui/icons-material/DoneAll"

const Payment = ({ _id, netAmount, paid, classes, onCollect }) => {
  return (
    <td className={classes}>
      {netAmount === paid ? (
        <p className="font-bold text-green-500">
          Paid <DoneAllIcon />
        </p>
      ) : null}
      {netAmount > paid ? (
        <div>
          <button
            onClick={() => onCollect(_id, netAmount, paid)}
            className="px-3 py-2 font-bold text-white bg-red-400"
          >
            Collect ৳{parseFloat(netAmount) - parseFloat(paid)}
          </button>
        </div>
      ) : null}
    </td>
  )
}

export default Payment
