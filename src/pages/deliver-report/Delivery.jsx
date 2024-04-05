import { useState } from "react"
import Switch from "@mui/material/Switch"

import LoadingIcon from "../../components/LoadingIcon"

const Delivery = ({ _id, delivered, onDelivery, classes }) => {
  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)

  const handleDelivery = async () => {
    setLoading(true)
    const success = await onDelivery(_id)
    if (success) {
      setLoading(false)
      setFailed(false)
    } else {
      setFailed(true)
      setTimeout(() => setLoading(false), 1000)
    }
  }

  return (
    <td className={classes}>
      {!loading && delivered && <span className="bg-green-500 text-white p-1 rounded-md">Delivered</span>}
      {!loading && !delivered && (
        <p className="text-black">
          Deliver <Switch checked={delivered} onChange={handleDelivery} />{" "}
        </p>
      )}
      {loading && <LoadingIcon />}
      {!loading && failed && (
        <p className="text-red-500">
          Retry <Switch checked={delivered} onChange={handleDelivery} />{" "}
        </p>
      )}
    </td>
  )
}

export default Delivery
