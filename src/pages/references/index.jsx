import TableRow from "./TableRow"
import Pagination from "../../components/Pagination"
import { Link } from "react-router-dom"
import AddCircleIcon from '@mui/icons-material/AddCircle';

const TABLE_HEAD = [ "Name", "Degree", "Action"]
const TABLE_ROWS = [
  {
    id: 123,
    name: "John Michael",
    degree: "MBBS"
  },
  {
    id: 124,
    name: "John Mike",
    degree: "FCPS, MBBS"
  },
  {
    id: 125,
    name: "John",
    degree: "ENT Specialist"
  },
  {
    id: 127,
    name: "Michael",
    degree: "MBBS"
  },
  {
    id: 128,
    name: "John Michael",
    degree: "Cardiologist"
  },
]

const References = () => {
  return (
    <section className="min-w-max">
        <div className="flex w-full justify-center items-center mt-10">

        <Link className="text-lg px-6 py-2 font-bold text-white bg-indigo-500">Add New <AddCircleIcon/> </Link>
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
          {TABLE_ROWS.map(({ id, name, degree }, index) => {
            const isLast = index === TABLE_ROWS.length - 1
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-500"

            return <TableRow key={id} id={id} name={name} degree={degree} classes={classes} />
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
