import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../style/_post.css'
import PostContainer from "../component/PostContainer"

const Article = () => {
  const location = useLocation(); //uselocation跟navigate要一起用(導頁跟被導頁)(location存值)
  const { rowid } = location.state;
  let [inputdata, setdata] = useState([]); //記值的地方

  useEffect(() => {
    fetch("https://localhost:7175/Content/outputContent", {
      method: "POST",
      body: JSON.stringify({
        //要傳去後端的值
        RowId: rowid,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setdata(data.returnData[0]);
       
      })
      .catch((error) => console.error(error));
  }, [rowid]);

  return (
      <div className="Bod">
       <PostContainer inputData={inputdata}/>
      </div>
    
  );
};

export default Article;
