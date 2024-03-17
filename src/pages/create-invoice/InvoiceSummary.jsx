const InvoiceSummary = (props) => {
  const { total, discount, afterDiscount, adjustment, netAmount, paid } = props.data
  const due = netAmount - paid
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Invoice Summary</h2>
      <div className="flex justify-between mb-2">
        <p className="text-gray-700">Invoice Total:</p>
        <p className="font-semibold">{total} BDT</p>
      </div>
      <div className="flex justify-between mb-2 items-center">
        <label htmlFor="discount" className="text-gray-700">
          Discount:
        </label>
        <div className="flex items-center">
          <input
            type="number"
            id="discount"
            className="p-1 w-20 text-right border border-gray-300 rounded-md mr-2"
            value={discount}
            onChange={(e) => props.onDiscount(parseFloat(e.target.value))}
          />
          <span>%</span>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-gray-700">After Discount:</p>
        <p className="font-semibold">{afterDiscount} BDT</p>
      </div>
      <div className="flex justify-between mb-2 items-center">
        <label htmlFor="adjustment" className="text-gray-700">
          Adjustment:
        </label>
        <div className="flex items-center">
          <input
            type="number"
            className="p-1 border w-20 text-right border-gray-300 rounded-md mr-2"
            value={adjustment}
            onChange={(e) => props.onAdjustment(parseFloat(e.target.value) || 0)}
          />
          <span>BDT</span>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-gray-700 text-xl font-semibold">Net Amount:</p>
        <p className="font-semibold text-xl">{netAmount} BDT</p>
      </div>
      <hr className="my-2 border-t border-gray-300" />
      <div className="flex justify-between mb-2 items-center">
        <label htmlFor="adjustment" className="text-gray-700">
          Paid:
        </label>
        <div className="flex items-center">
          <input
            type="number"
            className="p-1 border w-20 text-right border-gray-300 rounded-md mr-2"
            value={paid}
            onChange={(e) => props.onPay(parseFloat(e.target.value) || 0)}
          />
          <span>BDT</span>
        </div>
      </div>

      <div className="flex justify-between text-red-700 mb-2">
        <p className="font-semibold">Due:</p>
        <p className="font-semibold">{due} BDT</p>
      </div>
    </div>
  )
}

export default InvoiceSummary
