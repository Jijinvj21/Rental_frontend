import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/features/dataManagementSlice";
import { page } from "../../redux/features/dataManagementSlice";

function Search(props) {
  const [searchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();
  const timeoutRef = useRef(null);

  const handleSearch = (query) => {
    const trimmedQuery = query.trim();
    if (trimmedQuery !== "") {
      dispatch(search(trimmedQuery));
      dispatch(page(1));
    }
  };

  const debounceSearch = (query) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleSearch(query);
    }, 900);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      clearTimeout(timeoutRef.current);
      debounceSearch(searchVal.slice(0, -1));
      dispatch(page(1));
    }
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchVal(newValue);
    if (newValue === "") {
      dispatch(search(""));
      dispatch(page(1));
    } else {
      debounceSearch(newValue);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-row md:p-5  mt-2.5 w-full md:w-full lg:w-full drop-shadow-2xl">
        <input
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={searchVal}
          placeholder={props.placeholder ? `${props.placeholder}` : "search"}
          type="text"
          className={
            props.color
              ? `bg-${props.color} w-full text-sm md:text-xl opacity-70 rounded-full mt-2.5 md:mt-5 pt-1.5 md:p-3 pl-3 md:pl-9 focus:outline-none `
              : "  bg-boxColor w-full text-sm md:text-xl opacity-70 rounded-full mt-2.5 md:mt-5 pt-1.5 md:p-3 pl-3 md:pl-9 focus:outline-none"
          }
        />
      </div>
    </div>
  );
}

export default Search;
