import Layout from "../../components/Layout"
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
    setTimeout(fetchData, 500)
  }, [])

  const onSearch = () => {
    // Add logic to handle search based on searchKeyword and searchType
    console.log("Search keyword:", search.keyword)
    console.log("Search type:", search.type)
    dispatch(setKeyword(""))
  }

  const handleSendSMS = async (_id) => {
    try {
      const response = await axios.put("http://localhost:3000/api/v1/invoice/update", {
        _id,
        update: "notified",
      })
      if (response && response.data && response.data.success) {
        const updatedData = data.map((item) => {
          if (item._id === _id) {
            return { ...item, notified: true }
          }
          return item
        })
        setData(updatedData)
        return true
      } else {
        return false
      }
    } catch (e) {}
  }

  const TABLE_HEAD = ["Invoice ID", "Name", "Action", "Details"]
  return (
    <Layout>
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
              {data.map(({ _id, invoiceId, name, completed, notified }, index) => {
                const isLast = index === data.length - 1
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-500"
                const input = { _id, invoiceId, name, completed, notified, classes, onSendSMS: handleSendSMS }
                return <TableRow key={_id} input={input} />
              })}
            </tbody>
          </table>
        </section>
      )}
    </Layout>
  )
}

export default SendSMS
