import React from "react"

const AmountTable = () => {
  return (
    <div className="w-1/2">
      <table className="w-full mt-2 border-b-[1px] border-[#949b36cc]">
        <tbody>
          <tr>
            <td className="text-[13px] text-black">মোট</td>
            <td className="text-base text-black text-right">৳2900.00</td>
          </tr>

          <tr>
            <td className="text-[13px] text-black">30% ডিস্কাউন্টের পর</td>
            <td className="text-base text-black text-right">৳2900.00</td>
          </tr>
          <tr>
            <td className="text-[13px] text-black">Adjustment</td>
            <td className="text-base text-black text-right">৳2900.00</td>
          </tr>
          <tr className="bg-[#949b36cc]">
            <td className="text-[14px] font-bold text-base text-white">সর্বমোট</td>
            <td className="text-[14px] font-bold text-base text-white text-right">৳2900.00</td>
          </tr>

          <tr>
            <td className="text-[11px] text-base text-[#949b36cc]">নগদ</td>
            <td className="text-[11px] text-base text-[#949b36cc] text-right">৳2900.00</td>
          </tr>

          <tr>
            <td className="text-[11px] font-bold text-base text-[#949b36cc]">বাকি</td>
            <td className="text-[11px] font-bold text-base text-[#949b36cc] text-right">৳2900.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AmountTable
