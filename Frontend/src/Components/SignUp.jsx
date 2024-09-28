import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const submithandler = () => {
    const data = { username: username, password: password };
    const url = "http://localhost:3000/signup";

    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        if (res.data.message) alert(res.data.message);
      })
      .catch((err) => {
        alert("Failed to signup");
      });
  };

  return (
    <div>
      <h1>Welcome to SignUp Page</h1>
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
      <input
        className="rounded-full p-2 bg-red-100"
        type="submit"
        onClick={submithandler}
      />
    </div>
  );
};

export default SignUp;
