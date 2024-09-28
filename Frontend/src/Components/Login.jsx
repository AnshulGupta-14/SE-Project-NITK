import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const submithandler = () => {
    const data = { username: username, password: password };
    const url = "http://localhost:3000/login";

    axios
      .post(url, data)
      .then((res) => {
        
        if (res.data.message){
          alert(res.data.message);
          if(res.data.token){
            localStorage.setItem("token", res.data.token);
            navigate('/');
          }
        }
      })
      .catch((err) => {
        alert("Failed to signup");
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="flex gap-5">
        <h2 className="">USERNAME</h2>
        <input
          className="border"
          type="text"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-5">
        <h2>PASSWORD</h2>
        <input
          className="border"
          type="text"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </div>
      <input className="rounded-full p-2 bg-red-100" type="submit" onClick={submithandler}/>
    </div>
  );
};

export default Login;
