import React, { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import AddBoxIcon from "@mui/icons-material/AddBox"
import Table from "../../components/Table"

const Reports = () => {
  const { testName } = useParams()
  const navigate = useNavigate()
  const testList = ["cbc", "rbs", "lipid profile", "xray"]
  const isValidTest = testList.includes(testName.toLowerCase())

  useEffect(()=>{
    if(!isValidTest){
        navigate('/page404')
    }
  }, [testName, testList])

  const columns = ["Invoice ID", "Name"]
  const data = [
    ["018276td45", "Samiul Fahad", false],
    ["018276td45", "Ratul", false],
    ["018276td45", "Sharukh", true],
    ["018276td45", "Mithun", true],
  ]

  return (
    <section>
      <div className="flex flex-col justify-between items-center w-full md:w-4/5 mx-auto mt-10 gap-4">
        <div className="text-xl font-bold mx-auto text-center"> Manage All {testName.toUpperCase()} Reports</div>
        <Link className="btn">
          {" "}
          <AddBoxIcon /> {testName.toUpperCase()} Report
        </Link>
        <div className="w-full md:w-4/5">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </section>
  )
}

export default Reports
