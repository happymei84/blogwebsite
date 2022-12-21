import React from "react";
import Search from "./Search";

const nav = () => {
  return (
    <nav>
      <ul>
        <a href="/">home</a>
        <a href="/login">login</a>
        <a href="/Regist">Regist</a>
      </ul> 
      <Search/> 
    </nav>
  );
};

export default nav;
