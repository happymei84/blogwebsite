import React, { useState } from "react";

const Login = () => {
  let [account, setaccount] = useState("");
  let [password, setpassword] = useState("");
  
  const subfunction = (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ account: account, password: password }));
    fetch("https://localhost:7175/login/login", {
      method: "POST",
      body: JSON.stringify({ account: account, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === true) {
          alert("登陸月球成功");
        } else if (data === false) {
          alert("帳號/密碼錯誤");
        }
      })
      .catch((error) => console.error(error));
  };
  const accounthandler = (e) => {
    setaccount(e.target.value);
  };
  const passwordhandler = (e) => {
    setpassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={subfunction}>
        <h1>登入</h1>
        <p>
          帳號:
          <input
            onChange={accounthandler}
            required
            placeholder="請輸入帳號"
            type="text"
            value={account}
          />
        </p>
        <p>
          密碼:
          <input
            onChange={passwordhandler}
            required
            placeholder="請輸入密碼"
            type="text"
            value={password}
          />
        </p>
        <button type="submit">確認</button>
      </form>
    </div>
  );
};

export default Login;
