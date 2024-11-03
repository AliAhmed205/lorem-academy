import React from 'react'
import "../css/Feed.css"
import Posts from './Posts'
import UserPost from './UserPost'

const Feed = () =>{
  return(
    <>
    <section className="feed-container c_flex">
        <UserPost />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
    </section>
    </>
  )
}

export default Feed