import React   from "react";
import meetingData from "../Meetings.json";

const RightBar = () => {
  return (
    <section className="rightbar-container">
      <div className="meeting-container">
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
    </section>
  );
};

export default RightBar;
