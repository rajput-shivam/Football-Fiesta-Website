import React from "react";
import { Redirect } from "react-router-dom";

export default function Protected(props) {
  let auth = JSON.parse(localStorage.getItem("auth"));
  console.log(auth, "   sadjosaod ");

  return <div>{auth ? <props.cmp /> : <Redirect to="login"></Redirect>}</div>;
}
