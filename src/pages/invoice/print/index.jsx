import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PayReceipt = () => {
  useEffect(() => {
    const handlePrint = () => {
      window.print();
    };

    return () => {
      window.removeEventListener('beforeprint', handlePrint);
    };
  }, []);

  return (
    <section className="max-w-xl px-10 mx-auto pt-4">
      {/* header start */}
      <header>
        <button onClick={() => window.print()} className="w-40 mx-auto bg-blue-500 px-6 py-2 text-center">
          Print
        </button>
        <h1 className="font-bold text-xl text-black">আজিজ খান ডায়াগনস্টিক সেন্টার</h1>
        <h2 className="text-[14px] text-black">সরকারি হাসপাতাল গেইট সংলগ্ন, ভালুকা পৌরসভা, ময়মনসিংহ।</h2>
        <p className="text-[14px] text-black">মোবাইলঃ 01761-588184</p>
        <div className="flex space-x-4">
          <p className="font-normal text-black">ইমেইলঃ zikokhan16@gmail.com</p>
        </div>
      </header>
      {/* header end */}

      {/* main start */}
      <main className="mt-2">
        <hr className="border-1 py-1 border-[#949b36cc]" />
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[14px] text-black">রোগীর নামঃ</p>
            <p className="text-[14px] text-black">বয়সঃ</p>
            <p className="text-[14px] text-black">মোবাইলঃ</p>
          </div>
          <div>
            <p className="text-[12px] text-black">Invoice ID: xxxx</p>
            <p className="text-[12px] text-black">তারিখঃ 13th April 2024</p>
            <p className="text-[12px] text-black">ডাক্তার: Br. XXXh dfgs sdhfksd</p>
          </div>
        </div>

        {/* table start */}
        <table className="w-full">
          {/* Table content */}
        </table>
        {/* table end */}

        <div className="flex items-center justify-between border-b-[1px] border-t-[1px] border-slate-300"></div>

        <div className="flex items-start justify-between">
          {/* QR Code and Total table */}
        </div>
      </main>
      <footer className="w-full flex justify-between items-center mt-[80px] pb-2">
        <p className="font-bold text-sm text-left text-slate-400">
          Managed by <Link to="">Lab-Pilot.com</Link>
        </p>
        <div className="w-40 h-2 border-t-[1px] border-black ml-auto">
          <p className="font-semibold text-base text-black text-center">Signature</p>
        </div>
      </footer>
    </section>
  );
};

export default PayReceipt;
