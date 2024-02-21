import React from "react"

const DeliveryStatus = ({ status }) => {
  const text = status ? (
    <p className="p-1 text-white bg-cyan-800 text-center text-[12px] rounded-md">YES</p>
  ) : (
    <p className="p-1 text-white text-center bg-orange-600 text-[12px] rounded-md">NO</p>
  )
  return <div>{text}</div>
}

export default DeliveryStatus
