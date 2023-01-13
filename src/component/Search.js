import React, { useState } from "react";
import "../style/_search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  let [searchValue, setinput] = useState("");
  const inputhandler = (e) => {
    setinput(e.target.value);
  };
  let navigate = useNavigate();

  const searchEngine = (e) => {
    e.preventDefault();   
    navigate("/Searchingpage", {state:{searchValue:searchValue}});
    console.log("searchValue"+ searchValue)
  };

  return (
    <div>
      <form onSubmit={searchEngine}>
        <input onChange={inputhandler} value={searchValue} />
        <button>Search</button>
      </form>
    </div>
  );
};
export default Search;
