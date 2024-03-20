import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loading from "../../components/Loading"

import { setKeyword } from "../../store/searchSlice"
import TableRow from "./TableRow"
import Search from "../../components/Search"
import axios from "axios"

const SendSMS = () => {
  const search = useSelector((state) => state.search)
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [state, setState] = useState("fetchingData")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/invoice/all")
        console.log(response.data)
        setData(response.data.invoices)
        setState(null)
      } catch (e) {
        setState("fetchingDataError")
        console.log(e)
      }
    }
    setTimeout(fetchData, 5000)
  }, [])

  const onSearch = () => {
    // Add logic to handle search based on searchKeyword and searchType
    console.log("Search keyword:", search.keyword)
    console.log("Search type:", search.type)
    dispatch(setKeyword(""))
  }

  const onSendSMS = async (invoiceId) => {
    const response = await axios.put("http://localhost:3000/api/v1/invoice/notify-patient", { invoiceId })
    console.log(response.data.success)
    console.log(44444444444444)
  }

  const TABLE_HEAD = ["Invoice ID", "Name", "Action", "Details"]
  return (
    <>
      {state === "fetchingData" ? (
        <Loading title="Loading Data..." />
      ) : (
        <section className="bg-blue-gray-200 h-screen">
          <div className="w-80 mx-auto py-4">
            <Search onSearch={onSearch} />
          </div>
          <table className="w-full mx-auto bg-indigo-50 min-w-max table-auto text-left md:w-2/3">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-500 text-white bg-indigo-500 p-4">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(({ invoiceId, name, completed, notified }, index) => {
                const isLast = index === data.length - 1
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-500"
                const input = { invoiceId, name, completed, notified, classes, onSendSMS }
                return <TableRow key={invoiceId} input={input} />
              })}
            </tbody>
          </table>
        </section>
      )}
    </>
  )
}

export default SendSMS
