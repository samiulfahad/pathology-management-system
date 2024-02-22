import React from "react"

const Delivery = ({ status }) => {
  const delivered = status ? (
    <p>
      Status: <span className="font-bold pl-2 text-green-600">Delivered</span>{" "}
    </p>
  ) : (
    <p>
      {" "}
      <span className="font-bold pl-2 text-red-600">NOT Delivered</span>{" "}
    </p>
  )
  return delivered
}

export default Delivery
