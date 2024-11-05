import React   from "react";
import meetingData from "../Meetings.json";
import postData from "../Post.json";

const RightBar = () => {
  
  const sortedPostData = postData
  .slice()
  .sort((a, b) => {
    return b.firstname.localeCompare(a.firstname);
  });

  return (
    <section className="rightbar-container c_flex">
      <div className="meeting-container padding-1">
        <h2> <i className="fa fa-solid fa-headset"></i> Meetings</h2>
        {meetingData.meetings.map((meeting, index) =>( 
          <div className="fade-in" style={{
            animationDelay: `${1.5 + index * 0.2}s`
          }}
          key={index}>
        <h3>{meeting.topic}</h3>
        <h4>{meeting.day}</h4>
        <h5>{meeting.duration}</h5>
        </div>
      ))}
      </div>
      <div className="chat-container padding-1">
        <h2> <i className="fa fa-regular fa-comment"></i> Chat</h2>
        {sortedPostData.map((post) =>( 

        <button type="button" className="user e_flex" key={post.id}>
          <img src={post.photoUrl} alt={post.firstname} />
          <h5>{post.firstname} {post.surname}</h5>
        </button>
      ))}
      </div>
    </section>
  );
};

export default RightBar;
