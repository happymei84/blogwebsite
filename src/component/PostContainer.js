import React from "react";

const PostContainer = ({ inputData }) => {
  return (
    <div className="journal">
      <div>{inputData.postTitle}</div>
      <div>{inputData.postContent}</div>
      <span>************</span>
    </div>
  );
};

export default PostContainer;
