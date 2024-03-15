import TableRow from "./TableRow"
import Pagination from "../../components/Pagination"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import { useState } from "react"
import Modal from "../../components/Modal"
import Form from "./Form"
import { useDispatch, useSelector } from "react-redux"
import { setKeyword } from "../../store/searchSlice"
import Search from "../../components/Search"

const TABLE_HEAD = ["Name", "Degree", "Action"]
const TABLE_ROWS = [
  { id: 123, name: "John", degree: "MBBS", contact: 65465456 },
  { id: 124, name: "Mike", degree: "FCPS, MBBS", contact: 6655 },
  { id: 125, name: "Milton", degree: "ENT Specialist", contact: 6655667 },
  { id: 127, name: "Jim", degree: "MBBS", contact: 665578923 },
  { id: 128, name: "Fahim", degree: "Cardiologist", contact: 665566065 },
]

const References = () => {
  const initialFormData = { id: "", name: "", degree: "", contact: "" }
  const [data, setData] = useState(TABLE_ROWS)
  const [formData, setFormData] = useState(initialFormData)
  const [mode, setMode] = useState(null) // Introduce mode state
  const search = useSelector((state) => state.search)
  const dispatch = useDispatch()

  const handleModeChange = (mode, doc = null) => {
    setMode(mode)
    setFormData(doc ? { ...doc } : initialFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mode === "edit") {
      const updated = data.map((item) => (item.id === formData.id ? formData : item))
      setData(updated)
    } else {
      const id = formData.name + formData.contact
      const newData = {
        ...formData,
        id: id,
      }

      setData([...data, newData])
    }
    handleModeChange(null)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleEdit = (id) => {
    const doc = data.find((item) => item.id === id)
    handleModeChange("edit", doc)
  }

  const handleDelete = (id) => {
    const updated = data.filter((item) => item.id !== id)
    setData(updated)
  }

  const onSearch = () => {
    // Add logic to handle search based on searchKeyword and searchType
    console.log("Search keyword:", search.keyword)
    console.log("Search type:", search.type)
    dispatch(setKeyword(""))
  }

  return (
    <section className="min-w-max min-h-screen bg-blue-gray-200">
      {mode && (
        <Modal
          onClose={() => handleModeChange(null)}
          title={mode === "add" ? "Add New Reference" : "Editing"}
          actionText={mode === "add" ? "Add" : "Update"}
          onSubmit={handleSubmit}
        >
          <Form onChange={handleChange} data={formData} />
        </Modal>
      )}

      <div className="w-80 mx-auto py-4">
        <Search onSearch={onSearch} />
      </div>
      <div className="flex w-full justify-center items-center">
        <button
          onClick={() => handleModeChange("add")}
          className="text-lg px-6 py-2 font-bold text-white bg-indigo-500"
        >
          Add New <AddCircleIcon />{" "}
        </button>
      </div>
      <table className="w-full mx-auto bg-indigo-50 min-w-max table-auto text-left md:w-2/3 md:mt-6">
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
          {data.map(({ id, name, degree }, index) => {
            const isLast = index === data.length - 1
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-500"

            return (
              <TableRow
                key={id}
                id={id}
                name={name}
                degree={degree}
                onEdit={handleEdit}
                onDelete={handleDelete}
                classes={classes}
              />
            )
          })}
        </tbody>
      </table>
      <div className="w-full md:w-2/3 mx-auto">
        <Pagination />
      </div>
    </section>
  )
}

export default References
