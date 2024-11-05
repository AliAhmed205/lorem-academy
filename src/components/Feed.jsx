import React, { useState } from 'react';
import "../css/Feed.css";
import Posts from './Posts';
import UserPost from './UserPost';
import PostData from "../Post.json";
import Chat from './Chat';

const Feed = () => {
  const [message] = useState(PostData); 

  const [isGerrieLiked, setIsGerrieLiked] = useState(false)

  const LikeGerrie = () => {
    setIsGerrieLiked(!isGerrieLiked)
  }
  

  return (
    <>
      <section className="feed-container c_flex">
        <UserPost />
        <Chat isActive={isGerrieLiked} />
        {message.map((post) => (
          <Posts
            key={post.id} 
            photoUrl={post.photoUrl}
            firstname={post.firstname}
            surname={post.surname}
            date={post.date}
            postPhoto={post.postPhoto}
            postDescription={post.post_description}
            likes={post.likes}
            saved={post.saved}
            onLike={post.firstname === 'Gerrie' ? LikeGerrie : null}
          />
        ))}
      </section>
    </>
  );
};

export default Feed;
