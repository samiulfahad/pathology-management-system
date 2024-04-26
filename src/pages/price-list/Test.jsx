import React, { useState } from "react"

const Test = ({ testName, price, onPriceChange }) => {
  const [disabled, setDisabled] = useState(true)
  const [action, setAction] = useState("Change")
  const [initialPrice, setInitialPrice] = useState (price)

  const handleDisabality = () => {
    setDisabled((prevDisabled) => !prevDisabled) // Toggle the disabled state
    setAction((prevAction) => (prevAction === "Change" ? "Save" : "Change")) // Toggle the action text
  }

  const handleCancel = () => {
    setDisabled(true)
    setAction("Change")
    onPriceChange(testName, initialPrice)
  }

  const handleChange = (e) => {
    const newPrice = parseFloat(e.target.value)
    onPriceChange(testName, newPrice)
  }

  return (
    <div className="min-w-full ml-40">
      <div className="flex justify-start items-center py-2 space-x-8">
        <p className="text-xl">{testName}: </p>
        <input
          value={price}
          onChange={handleChange}
          type="number"
          disabled={disabled}
          className={`px-2 py-2 ${!disabled ? "border-2 border-indigo-500" : "bg-gray-300"}`}
        />
        <button className="btn" onClick={handleDisabality}>
          {action}
        </button>
        {!disabled && (
          <button onClick={handleCancel} className="btn !bg-red-500 !border-red-500 hover:text-white">
            Cancel
          </button>
        )}
      </div>
    </div>
  )
}

export default Test
