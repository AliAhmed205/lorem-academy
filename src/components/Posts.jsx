import React from "react";
import "../css/Feed.css";
import "../css/SideBar.css";

const Posts = () => {
  return (
    <>
      <article className="feed-posts">
        <div className="user-container e_flex">
          <img src="/images/user-peter.webp" alt="Peter Baan profielfoto" />
          <div className="username">
            <h1>Peter Baan</h1>
            <h2>21 september 2024 om 08:45</h2>
          </div>
          <button>
            {" "}
            <i className="fa-solid fa-ellipsis"></i>{" "}
          </button>
        </div>
        <p className="post text">This is a post</p>
        <img src="/images/studenten.webp" alt="studenten op de foto" />
        <div className="post interaction">
          <hr />
          <div>
            <button>
              <span>0</span>
              <i className="fa-solid fa-comment"></i> Reacties
            </button>
            <button>
              <span>0</span>
              <i className="fa-solid fa-thumbs-up"></i> Likes
            </button>
            <button>
              <span>0</span>
              <i className="fa-solid fa-bookmark"></i> Opslaan
            </button>
          </div>
          <hr />
        </div>

        <article className="post-something c_flex">
          <div className="d_flex">
            <img src="/images/user-peter.webp" alt="Peter Baan profielfoto" />
            <div className="reageer-container d_flex">
              <input type="text" name="post-message" placeholder="Reageren" />
              <button>
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </article>
      </article>
    </>
  );
};

export default Posts;
