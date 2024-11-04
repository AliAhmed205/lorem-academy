import React, { useState } from "react";
import "../css/Sticky-note.css";

const StickyNoteSchedule = () => {
  const [stickyNote, revealStickyNote] = useState(false)

  const clickSticky = () =>{
    revealStickyNote(stickyNote => !stickyNote)
  }
  return (
    <>
      <section onClick={clickSticky} className={`sticky-note-container a_flex " ${stickyNote ? "show" : ""}`}>
        <div></div>
        <section className="sticky-note a_flex">
          <h1>Opdracht</h1>
          <p>Voeg "Geschiedenis" 11u tot 13u toe voor Maandag.</p>
          <p>Voeg "Biologie" opnieuw toe voor donderdag, tot 10u. </p>
          <p>Engels gaat vrijdag niet meer door.</p>
          <p>Voeg "Wiskunde" 9u t/m 11u, en "ICT" 13u t/m 15u voor Vrijdag.</p>
        </section>
      </section>
    </>
  );
};

export default StickyNoteSchedule;