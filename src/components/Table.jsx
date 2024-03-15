import React from "react"
import { Link } from "react-router-dom"

const Table = ({ columns, data, testName }) => {
  return (
    <section className="w-full flex items-center bg-gray-50 font-poppins">
      <div className="justify-center  flex-1 px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="pt-4 bg-white rounded shadow">
          <div className="p-4 overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-lg text-left text-gray-500">
                  {columns.map((column, index) => (
                    <th key={index} className="px-4 py-2 font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "text-md bg-gray-100" : "text-md"}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-3">
                        {cell}
                      </td>
                    ))}
                    <td className="px-4 py-3">
                      {row[row.length - 1] ? (
                        <>
                          <Link to={`/download/${row[0]}`} className="btn-sm">
                            View
                          </Link>
                          {/* <Link to={`/edit/${row[0]}`} className="px-2 py-2">
                            {" "}
                            <Tooltip content="View/Edit05557">
                              <PreviewIcon />
                            </Tooltip>{" "}
                          </Link> */}
                        </>
                      ) : (
                        <Link to={`/upload/${testName}/${row[0]}`} className="btn-sm !bg-blue-500 !border-blue-500">
                          Generate
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Table
