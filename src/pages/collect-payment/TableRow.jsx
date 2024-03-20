const TableRow = ({ invoiceId, name, netAmount, paid, classes, onCollect }) => {
  const action =
    netAmount - paid > 0 ? (
      <button
        onClick={() => onCollect(invoiceId)}
        className="px-4 py-2 bg-orange-600 hover:bg-gray-400 text-white font-bold rounded-md transition duration-300"
      >
        Collect
      </button>
    ) : (
      <button className="px-4 py-2 mx-auto text-center w-1/2 text-green-500 font-bold">Paid</button>
    )

  return (
    <>
      <tr key={invoiceId}>
        <td className={classes}>{invoiceId}</td>
        <td className={classes}>{name}</td>
        <td className={classes + " text-xl "}>৳{netAmount}</td>
        <td className={classes}>
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-col">
              <p className="text-sm">Paid - ৳{paid}</p>
              <p className="text-sm font-bold text-red-600">Due - ৳{netAmount - paid}</p>
            </div>
          </div>
        </td>

        <td className={classes}> {action}</td>
      </tr>
    </>
  )
}

export default TableRow
