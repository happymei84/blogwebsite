import React from "react";
import Search from "./Search";
 
const nav = () => {
  return (
    <nav >
      <h1 className="title">無名小站</h1>
      <ul>
        <li>
        <a href="/">首頁</a>
        </li>
        <li>
        <a href="/login">登入</a>
        </li>
        <li>
        <a href="/Regist">註冊</a>
        </li>
        <li>
        <a href="/post">我要發文</a>
        </li>
     </ul>
      <Search/> 
    </nav>
  );
};
 
export default nav;