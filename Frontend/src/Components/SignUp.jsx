import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const submithandler = () => {
    const data = { username: username, password: password };
    const url = "http://localhost:3000/signup";

    if (data.username && data.password) {
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          if (res.data.message) alert(res.data.message);
        })
        .catch((err) => {
          alert("Failed to signup");
        });
    }
    else alert("Please enter correct username and password");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-90"></div>
      <div className="w-[30%] h-[80%] absolute top-[10%] bg-zinc-200">
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
        <div className="flex items-center justify-center gap-5 mt-5">
          <input
            className="rounded-full px-5 py-2 bg-red-100 flex items-center justify-center"
            type="submit"
            value={"SignUp"}
            onClick={submithandler}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
