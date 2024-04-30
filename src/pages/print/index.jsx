import React from "react"
import Layout from "../../components/Layout"
import { Link } from "react-router-dom"

const index = () => {
  const tableHead = ['Invoice ID', 'নাম', 'মোট Test', 'Action' ]
  return (
    <Layout>
      <div className="w-2/3 mx-auto">
        <table className="w-full bg-blue-gray-100">
          <thead>
            <tr className="bg-indigo-500 text-white">
              {tableHead.map(item => <th className="p-2 text-white">{item}</th>)}
              {/* <th className="p-2 pl-10 text-left">Invoice ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Total Test</th>
              <th className="p-2 text-left">Action</th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-black text-center">
              <td className="p-2 pl-10">121224-124525</td>
              <td className="p-2">Hasan</td>
              <td className="p-2">Total- 5 Completed- 3</td>
              <td className="p-2">
                <Link
                  to={"/print/reports/65456kl"}
                  className="px-4 py-2 bg-blue-gray-500 text-white font-bold rounded text-center"
                >
                  View/Print
                </Link>
              </td>
            </tr>
            <tr className="border-b-2 border-black">
              <td className="p-2 pl-10">121224-124525</td>
              <td className="p-2">Hasan</td>
              <td className="p-2">Total- 5 Completed- 3</td>
              <td className="p-2">
                <Link
                  to={"/print/reports/123456"}
                  className="px-4 py-2 bg-blue-gray-500 text-white font-bold rounded text-center"
                >
                  View/Print
                </Link>
              </td>
            </tr>
            <tr className="border-b-2 border-black">
              <td className="p-2 pl-10">121224-124525</td>
              <td className="p-2">Hasan</td>
              <td className="p-2">Total- 5 Completed- 3</td>
              <td className="p-2">
                <Link
                  to={"/print/reports/kjhkj3554"}
                  className="px-4 py-2 bg-blue-gray-500 text-white font-bold rounded text-center"
                >
                  View/Print
                </Link>
              </td>
            </tr>
            <tr className="border-b-2 border-black">
              <td className="p-2 pl-10">121224-124525</td>
              <td className="p-2">Hasan</td>
              <td className="p-2">Total- 5 Completed- 3</td>
              <td className="p-2">
                <Link
                  to={"/print/reports/6546520"}
                  className="px-4 py-2 bg-blue-gray-500 text-white font-bold rounded text-center"
                >
                  View/Print
                </Link>
              </td>
            </tr>
            <tr className="border-b-2 border-black">
              <td className="p-2 pl-10">121224-124525</td>
              <td className="p-2">Hasan</td>
              <td className="p-2">Total- 5 Completed- 3</td>
              <td className="p-2">
                <Link
                  to={"/print/reports/6213165"}
                  className="px-4 py-2 bg-blue-gray-500 text-white font-bold rounded text-center"
                >
                  View/Print
                </Link>
              </td>
            </tr>
            <tr className="border-b-2 border-black">
              <td className="p-2 pl-10">121224-124525</td>
              <td className="p-2">Hasan</td>
              <td className="p-2">Total- 5 Completed- 3</td>
              <td className="p-2">
                <Link
                  to={"/print/reports/165465"}
                  className="px-4 py-2 bg-blue-gray-500 text-white font-bold rounded text-center"
                >
                  View/Print
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default index
