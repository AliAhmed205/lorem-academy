import React from "react"
import "../css/Feed.css"
import "../css/SideBar.css"

const Posts = () =>{
  return (
    <>
    <article className="feed-posts">
    <div className="user-container e_flex">
          <img src="/images/user-peter.webp" alt="Peter Baan profielfoto" />
          <div className="username">
            <h1>Peter Baan</h1>
            <h2>Teacher</h2>
          </div>
          <button> <i className="fa-solid fa-ellipsis"></i> </button>
        </div>
    </article>
    </>
  )
}

export default Posts