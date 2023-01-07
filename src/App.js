import React from "react";
import Homepage from "./pages/Homepage.js";
import Nav from "./component/Nav.js";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Regist from "./pages/Regist.js";
import Post from "./pages/Post.js";
import Article from "./pages/Article.js";
import Searchingpage from "./pages/Searchingpage.js";
import './style/_nav.css'


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Regist" element={<Regist />} />
        <Route path="/Post" element={<Post />} />
        <Route path="*" element={<Homepage />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Searchingpage" element={<Searchingpage />} />
      </Routes>
      
    </div>
  );
}

export default App;
