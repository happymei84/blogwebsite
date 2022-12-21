import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Post = () => {
  let [postTitle, setpostTitle] = useState("");
  let [postContent, setpostContent] = useState("");
  let navigate = useNavigate();

  const articleFunction = (e) => {
    e.preventDefault();
    fetch("https://localhost:7175/Content/insertContent", {
      method: "POST",
      body: JSON.stringify({
        PostContent: postContent,
        PostTitle: postTitle,
        PostAccount: "a100st99",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.susseccStatus === true) {
          alert("發文成功!");       
           navigate("/Article",{state:{rowid:data.returnData.rowId}})//navigate(導頁destination,要傳過去的value)
        } else if (data.susseccStatus === false) {
          alert("標題/內文不可空白");
        }
      })
      .catch((error) => console.error(error));
  };
  const titleFunction = (e) => {
    setpostTitle(e.target.value);
  };
  const contentFunction = (e) => {
    setpostContent(e.target.value);
  };

  return (
    <div>
      <form onSubmit={articleFunction}>
        <p>
          標題:
          <input type="text" onChange={titleFunction} value={postTitle} />
        </p>
        <p>
          內文:
          <textarea onChange={contentFunction} value={postContent} />
        </p>
        <button>提交</button>
      </form>
    </div>
  );
};

export default Post;
