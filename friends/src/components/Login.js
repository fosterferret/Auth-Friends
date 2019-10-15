import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { axiosWithAuth } from "../axios"

const initialFormState = {
  username: "",
  password: ""
};

export default function Login(props) {
  const [loginInfo, setLoginInfo] = useState(initialFormState);

  const handleChange = e =>
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });

  const submitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", loginInfo)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friendsdisplay");
      })
      .catch(error => console.log(error));
  };

  if (localStorage.getItem("token")) return <Redirect to="/friendsdisplay" />;

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="enter username"
          value={loginInfo.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={loginInfo.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
