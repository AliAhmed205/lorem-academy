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
          <p>Engels gaat vrijdag niet meer door.</p>
          <p>Voeg "Wiskunde" van 9u tot 11u voor Woensdag.</p>
        </section>
      </section>
    </>
  );
};

export default StickyNoteSchedule;