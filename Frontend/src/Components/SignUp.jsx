import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [reg, setreg] = useState(null);
  const [mobile, setmobile] = useState("");

  const submithandler = () => {
    const data = { username, password, email, mobile, reg, name };
    const url = "http://localhost:3000/signup";

    if (data.username && data.password && data.email && data.name && data.mobile && data.reg) {
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          if (res.data.message) alert(res.data.message);
        })
        .catch((err) => {
          alert("Failed to signup");
        });
    } else alert("Please enter correct username and password");
  };

  return (
    <div className="w-full h-screen pt-[6%] flex items-center justify-center text-[13px] font-semibold">
      <div className="w-[30%] flex flex-col px-10 py-5 bg-white rounded-xl">
        <h1 className="text-2xl font-bold ">Create Account</h1>
        <h2 className="mt-3">Your Name</h2>
        <input
          className="border border-black p-2 py-1 text-md rounded-md"
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <h2 className="mt-3">Registration Number</h2>
        <input
          className="border border-black p-2 py-1 text-md rounded-md"
          type="number"
          value={reg}
          onChange={(e) => {
            setreg(e.target.value);
          }}
        />
        <h2 className="mt-3">Email Id</h2>
        <input
          className="border border-black p-2 py-1 text-md rounded-md"
          type="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <h2 className="mt-3">Phone Number</h2>
        <div className="flex gap-2">
          <button className="border border-black p-2 py-1 text-md rounded-md">+91</button>
          <input
            className="w-full border border-black p-2 py-1 text-md rounded-md"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={mobile}
            onChange={(e) => {
              setmobile(e.target.value);
            }}
          />
        </div>
        <h2 className="mt-3">Username</h2>
        <input
          className="border border-black p-2 py-1 text-md rounded-md"
          type="text"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <h2 className="mt-3">Create Password</h2>
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
          value={"Register"}
          onClick={submithandler}
        />
      </div>
    </div>
  );
};

export default SignUp;
