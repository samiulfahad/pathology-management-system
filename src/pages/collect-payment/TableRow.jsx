const TableRow = ({ id, name, totalAmount, paid, classes, onCollect }) => {
  const action =
    totalAmount - paid > 0 ? (
      <button
        onClick={() => onCollect(id)}
        className="px-4 py-2 bg-orange-600 hover:bg-gray-400 text-white font-bold rounded-md transition duration-300"
      >
        Collect
      </button>
    ) : (
      <button className="px-4 py-2 mx-auto text-center w-1/2 text-green-500 font-bold">Paid</button>
    )

  return (
    <>
      <tr key={id}>
        <td className={classes}>{id}</td>
        <td className={classes}>{name}</td>
        <td className={classes + " text-xl "}>৳{totalAmount}</td>
        <td className={classes}>
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-col">
              <p className="text-sm">Paid - ৳{paid}</p>
              <p className="text-sm font-bold text-red-600">Due - ৳{totalAmount - paid}</p>
            </div>
          </div>
        </td>

        <td className={classes}> {action}</td>
      </tr>
    </>
  )
}

export default TableRow
