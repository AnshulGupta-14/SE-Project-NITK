import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
        if (res.data.message) {
          alert(res.data.message);
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            navigate("/");
          }
        }
      })
      .catch((err) => {
        alert("Failed to signup");
      });
  };

  return (
    <div className="w-full h-screen pt-[6%] flex items-center justify-center">
      <div className="w-[30%] flex flex-col px-10 py-5 bg-white rounded-xl">
        <h1 className="text-2xl font-bold ">Sign in</h1>
        <h2 className="mt-5">Username or email</h2>
        <input
          className="border border-black p-2 py-1 text-md rounded-md"
          type="text"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <h2 className="mt-5">Password</h2>
        <input
          className="border border-black p-2 py-1 text-md rounded-md"
          type="text"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <input
          className="rounded-full mt-7 mx-auto w-1/3 px-5 py-2 bg-[#fcd12d]"
          type="submit"
          value={"Login"}
          onClick={submithandler}
        />

        <h1 className="mx-auto mt-10 text-xs font-bold text-zinc-700">
          New to CampusTrade?
        </h1>
        <NavLink
          to={"/signup"}
          className="rounded-full mt-2 mx-auto px-5 py-2 bg-[#fcd12d]"
        >
          Create Account
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
