import React from "react";
import Status from "./Status";
import Delivery from "./Delivery";

const InvoiceDetails = () => {
  const data = {
    id: 123,
    name: "Roton Mollah",
    age: 32,
    referredBy: "Dr. XXXX",
    contact: "017254568132",
    totalTest: 5,
    totalAmount: 2000,
    paid: 1500,
    testList: [
      { name: "cbc", completed: false },
      { name: "rbs", completed: false },
      { name: "xray", completed: false },
      { name: "lipid profile", completed: true },
      { name: "Blood sample test", completed: true },
    ],
    delivered: true,
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
      <div className="w-full max-w-3xl p-6 bg-white rounded-xl shadow-lg">
        <div className="text-3xl font-bold text-gray-800 pb-6">Invoice Summary</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-gray-700">
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Contact No.: {data.contact}</p>
            <p>Referred by: {data.referredBy}</p>
          </div>
          <div className="text-gray-700">
            <p>Invoice Id: {data.id}</p>
            <p>Total Amount: {data.totalAmount} BDT</p>
            <p className="text-red-600">Due: {data.totalAmount - data.paid} BDT</p>
            <Delivery status={data.delivered} />
          </div>
        </div>
        <div className="text-3xl font-bold py-8 text-gray-800">Test Reports</div>
        <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead className="text-white bg-purple-600">
            <tr>
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm">Test Name</th>
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.testList.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-300 ease-in-out">
                <td className="px-6 py-4 border-b">{item.name.toUpperCase()}</td>
                <td className="px-6 py-4 border-b">
                  <Status test={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default InvoiceDetails;
