import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PostContainer from "../component/PostContainer";

const Searchingpage = () => {
  const location = useLocation([]);
  const { searchValue } = location.state;
  let [inputdata, setdata] = useState([]); //記值的地方

  useEffect(() => {
    fetch("https://localhost:7175/Home/SearchFunction?model=" + searchValue, {
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
          // alert("找到了!");
          var allindex = [];
          data.returnData.forEach((index) => {
            //javascrip 迴圈(item是array的第幾項，index是值)
            // console.log(index);
            allindex = allindex.concat(index); //array相加(allindex[]+index[])
            console.log(allindex.concat(index));
          });
          setdata(allindex);
        } else if (data.susseccStatus === false) {
          alert("沒找到~");
        }
      })
      .catch((error) => console.error(error));
  }, [searchValue]);

  return (
    <div>
      {inputdata.map((data) => (
        <>
          <PostContainer inputData={data} />
        </>
      ))}
    </div>
  );
};

export default Searchingpage;
