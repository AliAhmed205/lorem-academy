import React from "react";
import { Link } from "react-router-dom";
import "../css/SideBar.css";

const SideBar = () => {
  return (
    <>
      <section className="side-bar c_flex">
        <div className="user-container e_flex">
          <img src="/images/user-peter.webp" alt="Peter Baan profielfoto" />
          <div className="username">
            <h1>Peter Baan</h1>
            <h2>SLB'er klas 204</h2>
          </div>
        </div>
        <hr />
        <h3>Overzicht</h3>
        <ul className="c_flex">
          <li>
            <Link to="/Home">
              <span>
                <i className="fa fa-solid fa-chevron-right"></i>
              </span>
              <i className="fa fa-solid fa-comment"></i> Docenten
            </Link>
          </li>
          <li>
            <Link to="/Home">
              <span>
                <i className="fa fa-solid fa-chevron-right"></i>
              </span>
              <i className="fa fa-solid fa-calendar-days"></i> Mijn Rooster
            </Link>
          </li>
          <li>
            <Link to="/Home">
              <span>
                <i className="fa fa-solid fa-chevron-right"></i>
              </span>
              <i className="fa fa-solid fa-envelope"></i> Berichten
            </Link>
          </li>
        </ul>
        <hr />
        <h3>Studenten</h3>
        <ul className="c_flex">
          <li>
            <Link to="/Schedule">
              <span>
                <i className="fa fa-solid fa-chevron-right"></i>
              </span>
              <i className="fa fa-solid fa-calendar-days"></i> Studenten Rooster
            </Link>
          </li>
          <li>
            <Link to="/Home">
              <span>
                <i className="fa fa-solid fa-chevron-right"></i>
              </span>
              <i className="fa fa-solid fa-envelope"></i> Berichten
            </Link>
          </li>
        </ul>
        <h3 className="lorem-academy-logo">
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
