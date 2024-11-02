import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  
  const navigeer = useNavigate();

  const correctLogin = () =>{
    if (email === "peter@lorem-academy.nl" && password === "ditiseensterkwachtwoord") {
        navigeer("/home")
    } else if (email === 'peter@lorem-academy.nl' && !password) {
      setErrorMessage('Vul een wachtwoord in.')
    }
    else {
      setErrorMessage('Inloggen mislukt. Controleer je e-mailadres en wachtwoord.')
    }
  }


  return (
    <>
      <section className="login-container c_flex">
        <h1>
          <i className="fa fa-solid fa-landmark"></i> Lorem Academy
        </h1>
        <h2>Teacher</h2>
        <h3>Login met je Lorem Academy e-mailadres</h3>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Lorem Academy e-mailadress" />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} name="" id="" placeholder="Wachtwoord" />
        <button type="button" onClick={correctLogin} >Login</button>
        <p>
          Log uit en sluit alle webbrowsers wanneer je klaar bent om ervoor te
          zorgen dat niemand anders toegang heeft tot je persoonlijke gegevens.
        </p>
      </section>
    </>
  );
};

export default Login;
