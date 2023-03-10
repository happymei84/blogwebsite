import React, { useState, useEffect } from "react";
import Select from "../component/Select";
import PostContainer from "../component/PostContainer";



const Homepage = () => {
  let [inputdata, setdata] = useState([]);
  const [input, setinput] = useState("");

  useEffect(() => {
    fetch("https://localhost:7175/Content/outputContent", {
      method: "POST",
      body: JSON.stringify({
        //要傳去後端的值
        RowId: 0,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setdata(data.returnData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="hotpost">熱門文章</div>
      <Select setinput={setinput} input={input} />
      {inputdata.map((data) => (
        <>
          <PostContainer inputData={data} />
        </>
      ))}
    </div>
  );
};

export default Homepage;
