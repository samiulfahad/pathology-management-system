import { Fragment } from "react"

const ErrorModal = ({title, onClose}) => {
  return (
    <Fragment>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-30 backdrop-blur-lg z-20 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full md:w-1/3 h-auto py-10 -mt-20 mx-auto bg-white px-10 rounded-md">
          <p className="text-xl font-bold text-center text-red-700">{title}</p>
          <div className="flex space-x-8">
            <button onClick={onClose} className="button px-4 py-2 my-8 border-2 border-blue-600 rounded-lg font-bold">
              Close
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ErrorModal
