import { Input } from "@material-tailwind/react"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from "react"

const Modal = ({ totalAmount, initialPayment, onClose }) => {
  const [due, setDue] = useState(totalAmount - initialPayment)

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-30 backdrop-blur-lg z-20 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-2/3 md:w-1/3 h-1/3 -mt-20 mx-auto bg-white px-10 py-40 rounded-md">
          <button className="flex items-end justify-end w-full text-3xl" onClick={onClose}><HighlightOffIcon fontSize="large"/></button>
          <div className="flex flex-col justify-start items-start gap-4">
            <div>
              <p className="">Total Amount: {totalAmount}</p>
              <p className="text-red-500 text-[12px] font-bold">Due: {totalAmount - initialPayment}</p>
            </div>
            <Input
              label="Collect"
              size="lg"
              type="number"
              step={"1"}
              max={totalAmount - initialPayment}
              value={due}
              onChange={(e) => setDue(e.target.value)}
            />
            <button className="btn my-4 mx-auto" onClick={onClose}>
              Collect Payment
            </button>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Modal