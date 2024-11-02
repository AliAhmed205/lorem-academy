import React, { useState } from "react";
import "../css/Sticky-note.css";

const StickyNote = () => {
  const [stickyNote, revealStickyNote] = useState(false)

  const clickSticky = () =>{
    revealStickyNote(stickyNote => !stickyNote)
  }
  return (
    <>
      <section onClick={clickSticky} className={`sticky-note-container a_flex " ${stickyNote ? "show" : ""}`}>
        <div></div>
        <section className="sticky-note a_flex">
          <h1>Login</h1>
          <p>peter@lorem-academy.nl</p>
          <p>ditiseensterkwachtwoord</p>
        </section>
      </section>
    </>
  );
};

export default StickyNote;