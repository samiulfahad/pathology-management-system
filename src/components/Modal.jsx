import { Fragment } from "react"

const Modal = (props) => {
  return (
    <Fragment>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-30 backdrop-blur-lg z-20 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-2/3 md:w-1/3 h-auto py-10 -mt-20 mx-auto bg-white px-10 rounded-md">
          <p className="text-xl font-bold text-center">{props.title}</p>
          <div className="">{props.children}</div>
          <div className="flex space-x-8">
            <button onClick={props.onClose} className="button px-4 py-2 border-2 border-blue-600 rounded-lg font-bold">
              Cancel
            </button>
            <button onClick={props.onSubmit} className="button px-4 py-2 border-2 border-blue-600 bg-blue-600 text-white rounded-lg font-bold">
              {props.actionText}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Modal
