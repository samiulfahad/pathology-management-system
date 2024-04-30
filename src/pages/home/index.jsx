import React from "react"
import Layout from "../../components/Layout"
import { Option, Select } from "@material-tailwind/react"
import SaleCard from "./SaleCard"

const Index = () => {
  const handleDetails = () => {}
  const months = [
    {name: "জানুয়ারি", value: 'january'},
    {name: "ফেব্রুয়ারি", value: 'january'},
    {name: "মার্চ", value: 'january'},
    {name: "এপ্রিল", value: 'january'},
    {name: "মে", value: 'january'},
    {name: "জুন", value: 'january'},
    {name: "জুলাই", value: 'january'},
    {name: "অগাস্ট", value: 'january'},
    {name: "সেপ্টেম্বর", value: 'january'},
    {name: "অক্টোবর", value: 'january'},
    {name: "নভেম্বর", value: 'january'},
    {name: "ডিসেম্বর", value: 'january'},
  
  ]
  return (
    <Layout className="">
      <section>
        <div className="w-full px-20 mx-auto mt-20">
          <div className="flex justify-center item-center gap-8">
            <SaleCard
              total={5000}
              due={2000}
              received={3000}
              doctorCommission={1000}
              onDetails={handleDetails}
              cardType="daily"
            />

            <SaleCard total={200000} due={15000} received={200000-15000} doctorCommission={25000} onDetails={handleDetails} />

            <div className="flex flex-col gap-4 w-60">
              <p className="font-bold">নির্দিষ্ট মাসের হিসাব</p>
              <Select label="হিসাবের মাস">
                {months.map(item => <Option value={item.value}>{item.name}</Option>)}
              </Select>
              <Select label="সাল">
                <Option value="2024">২০২৪</Option>
                <Option value="2023">২০২৩</Option>
              </Select>
              <button className="px-4 py-2 text-white bg-blue-gray-500">হিসাব দেখুন</button>
            </div>
          </div>
        </div>
        
        <h2 className="w-full mx-auto text-center text-xl font-bold my-8">আজকের টেস্টের হিসাব</h2>
        <table className="w-2/3 mx-auto bg-blue-gray-100 px-4 py-6">
          <thead>
            <tr className="bg-blue-gray-500 text-white">
              <th className="p-1 font-semibold text-left pl-6">টেস্টের নাম</th>
              <th className="p-1 font-semibold text-left">মোট</th>
              <th className="p-1 font-semibold text-left">Complete</th>
              <th className="p-1 font-semibold text-left">বাকি</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-black mb-2">
              <td className="p-1 font-semibold text-left pl-6">CBC</td>
              <td className="p-1 font-semibold text-left">10</td>
              <td className="p-1 font-semibold text-left">10</td>
              <td className="p-1 font-semibold text-left">0</td>
            </tr>

            <tr className="border-b-2 border-black mb-2">
              <td className="p-1 font-semibold text-left pl-6">RBS</td>
              <td className="p-1 font-semibold text-left">10</td>
              <td className="p-1 font-semibold text-left">7</td>
              <td className="p-1 font-semibold text-left">3</td>
            </tr>

            <tr className="border-b-2 border-black mb-2">
              <td className="p-1 font-semibold text-left pl-6">Ultra</td>
              <td className="p-1 font-semibold text-left">5</td>
              <td className="p-1 font-semibold text-left">3</td>
              <td className="p-1 font-semibold text-left">2</td>
            </tr>

            <tr className="border-b-2 border-black mb-2">
              <td className="p-1 font-semibold text-left pl-6">X-Ray</td>
              <td className="p-1 font-semibold text-left">12</td>
              <td className="p-1 font-semibold text-left">8</td>
              <td className="p-1 font-semibold text-left">4</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  )
}

export default Index
