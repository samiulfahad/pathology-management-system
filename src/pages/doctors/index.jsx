import React from "react"
import Layout from "../../components/Layout"

const index = () => {
  const tableHead = ["ডাক্তারের নাম", "ডিগ্রী", "পারসেন্টেজ", "Action", "মোট কমিশন"]
  const tableData = [
    { name: "Dr. Akil", degree: "MBBS, BCS(Health)", percentage: 10, commission: 2000 },
    { name: "Dr. Meow", degree: "FCPS, BCS(Health)", percentage: 15, commission: 7000 },
    { name: "Dr. Billu", degree: "MBBS", percentage: 10, commission: 20000 },
    { name: "Dr. Strange", degree: "MBBS, BCS(Health)", percentage: 10, commission: 2000 },
    { name: "Dr. Akil", degree: "MBBS, BCS(Health)", percentage: 10, commission: 2000 },
  ]
  const handlePercentageChange = () => {}
  const handleEdit = () => {}
  return (
    <Layout>
      <div className="w-2/3 mx-auto">
        <h2 className="w-full mx-auto text-center text-lg my-6">ডাক্তারের কমিশনের হিসাব রাখতে কমিশনের টাকার পাশে Make Payment বাটনে ক্লিক করুন। এবং Edit বাটনে ক্লিক করে ডাক্তারের নাম, ডিগ্রি ও কমিশন পারসেন্টেজ Edit করুন </h2>
        <table className="w-full bg-blue-gray-100">
          <thead>
            <tr className="bg-blue-gray-500">
              {tableHead.map((item) => (
                <th className="text-left pl-16 p-2 text-white">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr className="border-b-2 border-black p-2">
                <td className="text-left pl-16 p-">{item.name}</td>
                <td className="text-left pl-16">{item.degree}</td>
                <td className="text-left pl-16 py-3">{item.percentage}%</td>
                <td className="text-left pl-16">
                  <span className="mr-4 px-2 py-1 rounded text-white bg-blue-gray-500">
                    <button onClick={handleEdit}>Edit</button>
                  </span>
                </td>
                <td className="text-left pl-16">
                  {item.commission} Taka
                  <span className="ml-4 px-2 py-1 rounded text-white bg-blue-gray-500">
                    <button onClick={handlePercentageChange}>Make Payment</button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default index
