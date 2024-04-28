import axios from "axios"
import React from "react"

const index = () => {
    const printPage = async () => {
        const response = await axios.get('http://localhost:3000/api/v1/print/')
        console.log(response.data);
    }
  return (
    <section>
      <div className="flex flex-col gap-4 justify-center items-center content-center h-screen -mt-40">
        <div className="flex flex-col gap-4 border-2 p-6 border-black">
          <h1 className="text-xl font-bold w-full text-center">Invoice Summary</h1>
          <div className="flex justify-between space-x-16 items-center">
            <div>
              <div className="flex space-x-4 ">
                <p className="font-bold">Referred By:</p>
                <p>Dr. Strange</p>
              </div>
              <div className="flex space-x-4">
                <p className="font-bold">Net Amount:</p>
                <p>5000</p>
              </div>
              <div className="flex space-x-[73px]">
                <p className="font-bold">Paid:</p>
                <p>7000</p>
              </div>
              <div className="flex space-x-[75px]">
                <p className="font-bold">Due:</p>
                <p>3000</p>
              </div>
            </div>

            <div>
              <div className="flex space-x-6">
                <p className="font-bold">Name:</p>
                <p>Roton Signh Mollah</p>
              </div>
              <div className="flex space-x-9">
                <p className="font-bold">Age:</p>
                <p>36</p>
              </div>
              <div className="flex space-x-2 ">
                <p className="font-bold">Contact:</p>
                <p>017xxxxxxxx</p>
              </div>
              <div className="flex space-x-3 ">
                <p className="font-bold">Gender:</p>
                <p>Male</p>
              </div>
            </div>
          </div>
          <button className="btn">Edit (Patient Data Only)</button>
          <div>
            <p className="font-bold">Test List:</p>
            <p>CBC, RBS, ECG, XRay, CBC, RBS, ECG, XRay</p>
          </div>
        </div>
        <div className="flex gap-6">
          <button onClick={printPage} className="btn">Print Page</button>
        </div>
      </div>
    </section>
  )
}

export default index
