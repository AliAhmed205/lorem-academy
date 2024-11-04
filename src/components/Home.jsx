import React from "react";
import SideBar from "./SideBar";
import Feed from "./Feed";
import "../css/Home.css";
import RightBar from "./RightBar";

const Home = () =>{
  return (
    <>
      <section className="home-container d_flex">
        <SideBar />
        <Feed />  
          <RightBar />
      </section>
    </>
  )
}

export default Home
