import React, { useState } from "react";
import "../style/_search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  let [postTitle, setinput] = useState("");
  const inputhandler = (e) => {
    setinput(e.target.value);
  };
  let navigate = useNavigate();

  const searchEngine = (e) => {
    e.preventDefault();
    fetch("https://localhost:7175/Home/SearchFunction?model=" + postTitle, {
      //直接使用url?model= 回傳一個string
      method: "POST",
      // body: JSON.stringify({ //用body:JSON.stringify只能回傳obj
      //   PostTitle:postTitle,
      // }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.susseccStatus === true) {
          alert("找到了!");
          navigate("/Searchingpage",{state:{returnData:data.returnData}})
        
        } else if (data.susseccStatus === false) {
          alert("沒找到~");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={searchEngine}>
        <input onChange={inputhandler} value={postTitle} />
        <button>Search</button>
      </form>
    </div>
  );
};
export default Search;
