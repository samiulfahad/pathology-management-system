import React from "react"

const InvoiceDetails = (props) => {
  const { name, age, contact, referredBy } = props.data
  const { total, discount, afterDiscount, adjustment, netAmount, due } = props.amount

  return (
    <section className="bg-gray-100 pb-12">
      <div className="container mx-auto px-4 md:px-0">
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Patient Details</h2>
            <div className="grid grid-cols-2 gap-x-6">
              <div className="text-gray-700">
                <p className="text-lg font-semibold">Name:</p>
                <p className="text-lg">{name}</p>
              </div>
              <div className="text-gray-700">
                <p className="text-lg font-semibold">Contact:</p>
                <p className="text-lg">{contact}</p>
              </div>
              <div className="text-gray-700">
                <p className="text-lg font-semibold">Age:</p>
                <p className="text-lg">{age}</p>
              </div>
              <div className="text-gray-700">
                <p className="text-lg font-semibold">Referred By:</p>
                <p className="text-lg">{referredBy}</p>
              </div>
            </div>
          </div>
          <div className="px-6 py-8 border-t border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Tests Selected</h2>
            <div className="space-y-4">
              {props.checkedList.map((item) => (
                <p key={item.name} className="text-lg text-gray-700">
                  {item.name} - ৳{item.price}
                </p>
              ))}
            </div>
          </div>

          {/* Calculation Section */}
          <div id="a" className="px-6 py-8 border-t border-gray-200 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Invoice Summary</h2>
            <div className="grid grid-cols-2 gap-x-6">
              {/* Total */}
              <div className="text-lg font-bold text-gray-800">Total:</div>
              <div className="text-lg text-gray-800">৳{total}</div>

              {/* Discount */}
              <div className="text-lg text-gray-800">Discount:</div>
              <div className="flex items-center">
                <input
                  className="w-20 border border-gray-400 px-3 py-1 rounded-lg"
                  type="number"
                  max={100}
                  onChange={(e) => props.onDiscount(Math.min(e.target.value, 100))}
                />
                <p className="ml-2 text-gray-700">%</p>
              </div>

              {/* After Discount */}
              <div className="text-lg  text-gray-800">After Discount:</div>
              <div className="text-lg text-gray-800">৳{afterDiscount}</div>

              {/* Adjustment */}
              <div className="text-lg text-gray-800">Adjustment:</div>
              <div className="flex items-center">
                <input
                  className="w-20 border border-gray-400 px-3 py-1 rounded-lg"
                  type="number"
                  onChange={(e) => props.onAdjustment(e.target.value)}
                />
                <p className="ml-2 text-gray-700">৳</p>
              </div>

              {/* Net Amount */}
              <div className="text-lg font-bold text-gray-800">Net Amount:</div>
              <div className="text-lg text-gray-800">৳{netAmount}</div>

              {/* Paid */}
              <div className="text-lg  text-green-500">Paid:</div>
              <input
                className="w-20 border border-gray-400 px-3 py-1 rounded-lg"
                type="number"
                onChange={(e) => props.onPay(e.target.value)}
              />

              {/* Due */}
              <div className="text-lg text-red-500">Due:</div>
              <div className="text-lg text-red-500">৳{due}</div>
            </div>
          </div>

          <div className="px-6 py-8 border-t border-gray-200 flex justify-center">
            <button className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-bold mr-4 hover:bg-blue-600  transition duration-300 ease-in-out">
              Create Invoice
            </button>
            <button className="border-2 border-blue-500 text-blue-500 py-3 px-8 rounded-lg text-lg font-bold hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 transition duration-300 ease-in-out">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvoiceDetails


