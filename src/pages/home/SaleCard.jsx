import React from "react"

const SaleCard = ({cardType, total, due, received, doctorCommission, onDetails}) => {
    const title = cardType === "daily" ? "আজকের হিসাব" : " চলতি মাসের হিসাব"
  return (
    <div className="bg-blue-gray-500 px-4 py-4 w-60 rounded-md">
      <p className="xl text-center text-white font-bold border-b-2 border-white w-full">{title}</p>
      <div className="flex justify-between items-center text-white px-2"></div>
      <h2 className="text-2xl text-center text-white">
        {" "}
        <span className="text-sm">নগদঃ </span>৳ {received}
      </h2>
      <h2 className="text-2xl text-center text-white border-b-2 border-white">
        {" "}
        <span className="text-sm">বাকিঃ </span>৳ {due}
      </h2>
      <h2 className="text-2xl text-center text-white font-bold">
        {" "}
        <span className="text-sm">মোটঃ </span>৳ {total}
      </h2>

      <div className="border-2 p-2 text-center text-white border-white">
        <h3 className="text-md font-bold">ডাক্তারদের কমিশন</h3>
        <h2 className="text-md text-center">৳ {doctorCommission}</h2>
      </div>

      <button onClick={onDetails} className="underline text-white text-center w-full mx-auto mt-2">বিস্তারিত</button>
    </div>
  )
}

export default SaleCard
