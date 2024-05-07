import React, { useState } from "react";
import { Input, Button, Alert } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const { TextArea } = Input;
function AxiosLogin() {
  var [userName, setUserName] = useState("");
  var [password, setPassword] = useState("");
  var [email, setEmail] = useState("");
  var navigate = useNavigate(); //to navigate to other pages
  var [error, setError] = useState("");

  function loginApi() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/login",
      method: "post",
      data: { email, password },
    }).then(
      (response) => {
        // setCakes(response.data.data)
        console.log("response coming from login api ", response.data.data);
        navigate("/cakes"); // once response is success then it returns to cakelist
      },
      (error) => {
        console.log("error from login api", error);
      }
    );
  }
  function changeUsername(e) {
    console.log("event");
    var a = e.target.value;
    console.log(a);
    setEmail(a);
  }
  function changePassword(e) {
    console.log("event");
    var a = e.target.value;
    console.log(a);
    setPassword(a);
  }

  return (
    <div>
      {error == "Invalid credentials" && <Alert type="error" message={error} />}
      <input placeholder="email" type="text" onChange={changeUsername}></input>
      <br></br>
      <input
        placeholder="Password"
        type="password"
        onChange={changePassword}
      ></input>
      <br></br>
      <br></br>
      <Button onClick={loginApi}>Login</Button>
      <Link to="/forgot">
        <Button>Forgot</Button>
      </Link>
    </div>
  );
}
export default AxiosLogin;
