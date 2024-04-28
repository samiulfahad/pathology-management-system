import React from "react"

const QRCode = () => {
  return (
    <div className=" w-1/2 flex items-start flex-col">
      <img className="w-28 h-28 mt-2" src="/qr_code.png" alt="qr code" />

      <div className="leading-4 font-normal text-[11px] text-left mt-2 pr-2 w-44">
        রিপোর্ট ডাউনলোড করার জন্য QR Code টি স্ক্যান করুন
      </div>
    </div>
  )
}

export default QRCode
