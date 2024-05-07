//signup component for axios

import React from "react";
import { Button } from "antd";
import { useState } from "react";
import axios from "axios";
function AxioSignup() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  function CreateAccount() {
    console.log(name, password);
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/register",
      method: "post",
      data: { name, email, password },
    }).then(
      (response) => {
        // setCakes(response.data.data)
        console.log(response);
        console.log(
          "response coming from create account api ",
          response.data.data
        );
      },
      (error) => {
        console.log("error from register/create account api", error);
      }
    );
  }
  //console.log("naam hai : ", name);
  function yo() {
    alert(
      "name is : " +
        name +
        "\nemail is : " +
        email +
        "\npassword is : " +
        password
    );
  }
  function nameChange(e) {
    var x = e.target.value;
    setName(x);
    console.log(x);
  }
  function emailChange(e) {
    var x = e.target.value;
    setEmail(x);
    console.log(email);
  }
  function passwordChange(e) {
    var x = e.target.value;
    setPassword(x);
    console.log(password);
  }
  return (
    <div>
      <input placeholder="UserName" type="text" onChange={nameChange}></input>
      <br></br>
      <input placeholder="Email" type="text" onChange={emailChange}></input>
      <br></br>
      <input
        placeholder="Password"
        type="password"
        onChange={passwordChange}
      ></input>
      <br></br>
      <input
        placeholder="Confirm Password"
        type="password"
        onChange={passwordChange}
      ></input>
      <br></br>
      <br></br>
      <Button onClick={yo}>Sign Up</Button>
      <Button onClick={CreateAccount}>Create Account</Button>
    </div>
  );
}
export default AxioSignup;
