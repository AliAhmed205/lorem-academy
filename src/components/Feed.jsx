import React from 'react'
import "../css/Feed.css"
import Posts from './Posts'

const Feed = () =>{
  return(
    <>
    <section className="feed-container c_flex">
        <article className="post-something c_flex">
          <h3><i className="fa-solid fa-pen"></i> Bericht plaatsen</h3>
          <hr />
          <div className="d_flex gap_1">
            <img src="/images/user-peter.webp" alt="Peter Baan profielfoto" />
            <input type="text" name="post-message" id="post-id" placeholder='Wat wil je delen?' />
            <button> <i className="fa-regular fa-images"></i></button>
          </div>
        </article>
        <Posts />
    </section>
    </>
  )
}

export default Feed