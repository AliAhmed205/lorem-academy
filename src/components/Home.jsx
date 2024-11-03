import React from "react";
import SideBar from "./SideBar";
import Feed from "./Feed";

const Home = () =>{
  return (
    <>
    <section className="home-container d_flex">
    <SideBar />
    <Feed />
    </section>
    </>
  )
}

export default Home