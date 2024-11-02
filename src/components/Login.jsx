import React from "react";
import "../css/Login.css"

const Login = () => {
  return (
    <>
      <section className="login-container c_flex">
        <h1><i className="fa fa-solid fa-landmark"></i> Lorem Academy</h1>
        <h2>Login met je Lorem Academy e-mailadres</h2>
        <input type="text" placeholder="Lorem Academy e-mailadress" />
        <input type="password" name="" id="" placeholder="Wachtwoord" />
        <button type="button">Login</button>
      </section>
    </>
  );
};

export default Login;
