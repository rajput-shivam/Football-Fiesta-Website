import React, { Component } from "react";

export default class Auth extends Component {
  login = () => {
    //console.log("state", this.state);
    fetch("http://localhost:5000/api/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((response) => {
        //console.log(response.token);
        localStorage.setItem("auth", JSON.stringify(response.token));
      });
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <br />
        <br />
        <button onClick={() => this.login()}>LOGIN</button>
      </div>
    );
  }
}
