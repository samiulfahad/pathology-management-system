import TableRow from "./TableRow"
import Pagination from "../../components/Pagination"
import { useState } from "react"

const TABLE_HEAD = ["Invoice ID", "Name", "Contact", "Delivery"]
const TABLE_ROWS = [
  {
    id: 123,
    name: "John Michael",
    contact: 1475554,
    delivered: false,
  },
  {
    id: 124,
    name: "John Mike",
    contact: 1475554,
    delivered: false,
  },
  {
    id: 125,
    name: "John",
    contact: 1475554,
    delivered: true,
  },
  {
    id: 127,
    name: "Michael",
    contact: 1475554,
    delivered: true,
  },
  {
    id: 128,
    name: "John Michael",
    contact: 1475554,
    delivered: false,
  },
]

const DeliverReport = () => {
  const [data, setdata] = useState(TABLE_ROWS)

  const handleDelivery = (id) => {
    const updated = data.map((item) => {
      if (item.id === id) {
        item.delivered = !item.delivered
        return item
      }
      return item
    })
    setdata(updated)
  }

  return (
    <section className="min-w-max">
      <table className="w-full mx-auto bg-indigo-50 min-w-max table-auto text-left md:w-2/3 md:mt-20">
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
          {data.map(({ id, name, contact, delivered }, index) => {
            const isLast = index === TABLE_ROWS.length - 1
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-500"
            const data = { id, name, contact, delivered, handleDelivery, classes }
            return <TableRow key={id} data={data} />
          })}
        </tbody>
      </table>
      <div className="w-full md:w-2/3 mx-auto">
        <Pagination />
      </div>
    </section>
  )
}

export default DeliverReport
