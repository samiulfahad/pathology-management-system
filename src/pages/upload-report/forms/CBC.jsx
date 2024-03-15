import React, { useState } from "react";

const CBCUploadForm = () => {
  const initialState = {
    whiteBloodCellCount: "",
    redBloodCellCount: "",
    hemoglobin: "", // Might be text depending on data format
    hematocrit: "",
    plateletCount: "",
    meanCorpuscularVolume: "",
    meanCorpuscularHemoglobin: "",
    meanCorpuscularHemoglobinConcentration: "",
    redCellDistributionWidth: "",
    meanPlateletVolume: "",
    plateletDistributionWidth: "",
    meanPlateletComponent: "",
    plateletLargeCellRatio: "",
  };

  const [cbcData, setCBCData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCBCData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      if (index < Object.keys(cbcData).length - 1) {
        e.preventDefault();
        const inputs = document.getElementsByTagName("input");
        inputs[index + 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log("CBC Data:", cbcData);
    // Add logic to send CBC data to server or process it further
  };

  return (
    <div className="w-full mx-auto px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white mx-auto w-full shadow-md rounded px-8 pt-6 pb-8 mb-4 md:max-w-md lg:max-w-xl xl:max-w-2xl"
      >
        <div className="flex flex-wrap -mx-4">
          {Object.keys(cbcData).map((key, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor={key}
                className="block text-sm font-bold mb-2 capitalize text-gray-700"
              >
                {key.replace(/([A-Z])/g, " $1").toLowerCase()}
              </label>
              <input
                type={key === "hemoglobin" ? "text" : "number"} // Adjust type based on field
                id={key}
                name={key}
                value={cbcData[key]}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default CBCUploadForm;