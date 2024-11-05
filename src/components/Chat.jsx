import React, { useState } from 'react'
import PostingData from "../Post.json"
import "../css/Chat.css"

const thirdPost = PostingData[2]



const Chat = ({isActive}) =>{
  
  const [berichtSluiten, setBerichtSluiten] = useState(false)

  const sluitBericht = () =>{
    setBerichtSluiten(true)
  }

  if (!isActive || berichtSluiten) return null;

  return (
    <>
      <section className={`chat-pop-container c_flex ${isActive ? 'active' : ''}`}>
      <div className="chat-header d_flex">
        <img src={thirdPost.photoUrl} alt={thirdPost.firstname} />
        <h4>{thirdPost.firstname} {thirdPost.surname}</h4>
        <button onClick={sluitBericht}><i className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="chat-history">
        <p>Hallooo Peter. Ik zag dat je mijn bericht geliket had. Als je wilt kan je ook vertellen wat er op mijn expidetie in Afrika gebeurt was, het zo léuk.</p>
      </div>
      <div className="fast-reply">
        <button><i className="fa-solid fa-check"> accepteer</i></button>
        <button onClick={sluitBericht}><i className="fa-solid fa-xmark"> weiger</i></button>
      </div>
    </section>
    </>
  )
}

export default Chat 