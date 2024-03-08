import TableRow from "./TableRow"
import Pagination from "../../components/Pagination"
import Modal from "../../components/Modal"
import { useState } from "react"
import Form from "./Form"

const TABLE_HEAD = ["Invoice ID", "Name", "Total", "Due", "Action"]
const TABLE_ROWS = [
  {
    id: 123456,
    name: "Rahul",
    totalAmount: 1500,
    paid: 1500,
  },
  {
    id: 123654,
    name: "Rana",
    totalAmount: 800,
    paid: 100,
  },
  {
    id: 12365,
    name: "Himel",
    totalAmount: 5000,
    paid: 500,
  },
  {
    id: 1234566,
    name: "Kayesh",
    totalAmount: 2500,
    paid: 2500,
  },
]

const CollectPayment = () => {
  const [data, setData] = useState(TABLE_ROWS)
  const [modal, setModal] = useState(false)
  const [clickedId, setClickedId] = useState(null)
  const [dueAmount, setDueAmount] = useState(0)
  const [amountToCollect, setAmountToCollect] = useState(0)

  const handleCollect = (id) => {
    const doc = data.find((item) => item.id === id)
    console.log(doc)
    setDueAmount(doc.totalAmount - doc.paid)
    setAmountToCollect(doc.totalAmount - doc.paid)
    setModal(true)
    setClickedId(id)
  }
 
  const closeModal = () => {
    setModal(false)
    setDueAmount(0)
    setClickedId(null)
  }
  const handleSubmit = (e) => {
    const updated = data.map((item) => {
      if (item.id === clickedId) {
        item.paid = item.totalAmount
        return item
      } else {
        return item
      }
    })
    setData(updated)
    setModal(false)
  }

  

  return (
    <section className="min-w-max">
      {modal && (
        <Modal title="Collect Due Amount" onClose={closeModal} onSubmit={handleSubmit} actionText="Collect">
          {" "}
          <Form dueAmount={dueAmount} />{" "}
        </Modal>
      )}
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
          {data.map(({ id, name, totalAmount, paid }, index) => {
            const isLast = index === TABLE_ROWS.length - 1
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-500"

            return (
              <TableRow
                key={id}
                id={id}
                name={name}
                onCollect={handleCollect}
                totalAmount={totalAmount}
                paid={paid}
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

export default CollectPayment
