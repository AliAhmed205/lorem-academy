import React from "react";
import "../css/SideBar.css";

const SideBar = () => {
  return (
    <>
      <section className="side-bar c_flex">
        <div className="user-container e_flex">
          <img src="/images/user-peter.webp" alt="Peter Baan profielfoto" />
          <div className="username">
            <h1>Peter Baan</h1>
            <h2>Teacher</h2>
          </div>
        </div>
        <hr />
        <h3>Overzicht</h3>
        <ul className="c_flex a_gap">
          <li>
            <button className="d_flex">
              <span>
                <i className="fa fa-solid fa-chevron-right"></i>
              </span>
              <i className="fa fa-solid fa-comment"></i> Feed
            </button>
          </li>
          <li>
            <button className="d_flex">
              <span>
                <i className="fa fa-solid fa-chevron-right"></i>
              </span>
              <i className="fa fa-solid fa-calendar-days"></i> Rooster
            </button>
          </li>
          <li>
            <button className="d_flex">
              <span>
                <i className="fa fa-solid fa-chevron-right"></i>
              </span>
              <i className="fa fa-solid fa-envelope"></i> Berichten
            </button>
          </li>
        </ul>
        <h3>
          <i className="fa fa-solid fa-landmark"></i> lorem Academy
        </h3>
        <a href="/">
          {" "}
          <i className="fa fa-solid fa-arrow-right-from-bracket"></i> Log out
        </a>
      </section>
    </>
  );
};

export default SideBar;
