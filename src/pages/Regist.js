import React, { useState } from "react";
import Test from "../component/Test";
import { useNavigate } from "react-router-dom";

const Regist = () => {
  let [account, setaccount] = useState("");
  let [password, setpassword] = useState("");
  let [name, setname] = useState("");
  let [phone, setphone] = useState("");
  let [warning, setwarning] = useState(false); //存狀態
  let navigate = useNavigate();

  const SubFunction = (e) => {
    e.preventDefault();

    fetch("https://localhost:7175/Register/regist", {
      method: "POST",
      body: JSON.stringify({
        Account: account,
        Password: password,
        Name: name,
        Phone: phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => { //data後端回傳回來的資料(true/false)
        if (data === false) {
          alert("此帳號註冊失敗");
          setwarning(true);
        } else if (data === true) {
          setwarning(false);
          navigate("/Login") //導頁
        }
      })
      .catch((error) => console.error(error));
  };

  const actfunction = (e) => {
    setaccount(e.target.value);
  };
  const pasfunction = (e) => {
    setpassword(e.target.value);
  };
  const namfunction = (e) => {
    setname(e.target.value);
  };
  const phofunction = (e) => {
    setphone(e.target.value);
  };
  return (
    <div>
      <form  onSubmit={SubFunction}>
        <h1>註冊</h1>
        <p>
          帳號: <input type="text" onChange={actfunction} value={account} />
        </p>
        {warning === true &&
        <Test inputValue={"帳號"} />
      }
        <p>
          密碼: <input type="text" onChange={pasfunction} value={password} />
        </p>
       
        {warning === true &&
        <Test inputValue={"密碼"} />
      }
        <p>
          暱稱: <input type="text" onChange={namfunction} value={name} />
        </p>
        <p>
          電話: <input type="text" onChange={phofunction} value={phone} />
        </p>
        <button type="submit">提交</button>
      </form>
    </div>
  );
};

export default Regist;
