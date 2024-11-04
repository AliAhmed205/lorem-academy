import React, { useState } from 'react';
import "../css/Feed.css";

const Posts = ({ 
  photoUrl, 
  firstname, 
  surname, 
  date, 
  postPhoto, 
  postDescription, 
  likes: addLikes, 
  saved 

}) => {

  const [liked, setLikes] = useState(addLikes)
  const [geliket, setGeliket] = useState(false)

  const likePost = () =>{
    if (!geliket) {
    setLikes(liked + 1)
    setGeliket(true)
    } else {
      setLikes(liked - 1)
      setGeliket(false)
    }
  }

  return (
    <>
    <article className="feed-posts">
    <div className="post-container">
      <div className="user-container e_flex">
        <img src={photoUrl} alt={`profielfoto van ${firstname} ${surname}`} />
        <div className="username">
          <h1>{firstname} {surname}</h1>
          <h2>{date}</h2>
        </div>
        <button>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </div>

      <p className="post text"
          dangerouslySetInnerHTML={{
            __html: postDescription
          }}
        ></p>
      {/* <p className="post text">{postDescription}</p> */}
      {postPhoto && <img src={postPhoto} alt="foto van de post" />}

      <div className="post interaction">
        <hr />
        <div>

          <button onClick={likePost} className={`${geliket ? "interacted" : ""}`} >
            <span>{liked}</span>
            <i className="fa-solid fa-thumbs-up"></i> Vind-ik-leuk
          </button>
          <button>
            <span>{saved}</span>
            <i className="fa-solid fa-bookmark"></i> Opslaan
          </button>
        </div>
        {/* <hr /> */}
      </div>
    </div>
     {/* <article className="post-something c_flex">
     <div className="d_flex">
       <img src="/images/user-peter.webp" alt="Peter Baan profielfoto" />
       <div className="reageer-container d_flex">
         <input type="text" name="post-message" placeholder="Reageren" />
         <button>
           <i className="fa-solid fa-paper-plane"></i>
         </button>
       </div>
     </div>
   </article> */}
   </article>
 </>

    
  );
};

export default Posts;
