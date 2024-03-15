import React, { useState } from "react"
import {  useDispatch, useSelector } from "react-redux"
import { setKeyword, setType } from "../store/searchSlice"

const Search = ({ onSearch }) => {
    
    ///////////////////////////// Code To Add in Parent  //////////////////////////////////
    
    
    // const [searchKeyword, setSearchKeyword] = useState("");
    // const [searchBy, setSearchBy] = useState("contact");

    // const handleSearchKeyword = (e) => {
    //   setSearchKeyword(e.target.value);
    // };

    // const handleSearchBy = (e) => {
    //   setSearchBy(e.target.value);
    // };

    // const onSearch = () => {
    //   // Add logic to handle search based on searchKeyword and searchType
    //   console.log("Search keyword:", searchKeyword);
    //   console.log("Search type:", searchBy);
    // // };


///////////////////////////////////// End of code /////////////////////////////////////////

  const dispatch = useDispatch()
  const search = useSelector(state => state.search)

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch()
    }
  }

  const handleSearchKeyword = (e) =>{
    dispatch(setKeyword(e.target.value))
  }

  const handleSearchBy = e => {
    dispatch(setType(e.target.value))
  }


  return (
    <div className="flex justify-center items-center">
      {/* Select element */}
      <select
        value={search.type}
        onChange={handleSearchBy}
        className="border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none bg-white h-full"
      >
        <option value="contact">Contact No</option>
        <option value="invoiceId">Invoice ID</option>
      </select>

      {/* Input field for searching */}
      <input
        type="text"
        value={search.keyword}
        onChange={handleSearchKeyword}
        onKeyDown={handleKeyDown}
        placeholder="Search keyword..."
        className="flex-1 border border-gray-300 rounded-r-none py-[8.5px] px-4 focus:outline-none h-full"
      />

      {/* Search button */}
      <button
        type="button"
        onClick={onSearch}
        className="px-4 py-1.5 bg-blue-500 text-white font-bold rounded-r-md focus:outline-none h-full"
      >
        Search
      </button>
    </div>
  )
}

export default Search
