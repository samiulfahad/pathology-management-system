import React from "react"

const TestTable = ({tests}) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-[#949b36cc]">
          <th className="p-1 font-semibold text-base text-left text-white">#</th>
          <th className="p-1 pl-0 font-semibold text-base text-left text-white">টেস্টের নাম</th>
          <th className="p-1 pr-2 font-bold text-base  text-white text-right">মূল্য তালিকা</th>
        </tr>
      </thead>
      <tbody>
        {/* Render test rows */}
        {tests.map((test, index) => (
          <tr key={index} className="">
            <td className="font-semibold text-[12px] text-black">{index + 1}</td>
            <td className="font-semibold text-[12px] text-black">{test.name}</td>
            <td className="font-semibold text-[12px] text-black text-right">৳ {test.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TestTable
