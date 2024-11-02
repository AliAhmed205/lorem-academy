import React, { useState } from "react";

const StickyNote = () =>{
  const [crossedTodo, setCrossTodo] = useState(false)

  const strikeThrough = () =>{
    setCrossTodo(crossedTodo => !crossedTodo)
  }

  return (
    <>
    <section className="sticky-note">
     <p onClick={strikeThrough}><span className={crossedTodo ? "strike" : " "}>is what I want to strike out</span></p>
    </section>
    </>
  )
}

export default StickyNote