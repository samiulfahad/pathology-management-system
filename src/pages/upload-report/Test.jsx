import React from "react"
import { Link } from "react-router-dom"

const Test = ({ name, completed, uncompleted }) => {
    const url = "/upload-report/" + name
  return (
    <Link to={url} className="flex flex-col p-4 rounded-md bg-cyan-200 text-4xl duration-200 hover:bg-cyan-600 hover:text-white">
      <h1 className="text-center">{name}</h1>
      <div className="text-lg flex space-x-3 justify-between items-center">
        <p className="p-2 rounded-md text-white bg-cyan-600 m-2">Completed: {completed}</p>
        <p className="p-2 rounded-md text-white bg-orange-500 m-2">Uncompleted: {uncompleted}</p>
      </div>
    </Link>
  )
}

export default Test
