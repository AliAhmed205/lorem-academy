import React, { useState } from 'react';
import "../css/Feed.css";
import Posts from './Posts';
import UserPost from './UserPost';
import PostData from "../Post.json";

const Feed = () => {
  const [message] = useState(PostData); 

  return (
    <>
      <section className="feed-container c_flex">
        <UserPost />
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
          />
        ))}
      </section>
    </>
  );
};

export default Feed;
