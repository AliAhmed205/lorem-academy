import React from "react"
import Login from "./Login"
import Stickynote from "./StickyNote"
import "../css/Index.css"

const Index = () =>{

  return (
    <>
    <section className="index-container d_flex">
        <img src="/images/login-background.jpeg" alt="background-image login" />
        <section className="login-parent">
    <Stickynote />
      <Login />
      </section>
    </section>
    </>
  )
}

export default Index