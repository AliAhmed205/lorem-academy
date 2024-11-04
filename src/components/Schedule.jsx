import React, { useEffect, useState} from "react";
import roosterData from "../Rooster.json";
import "../css/Schedule.css"

function Schedule() {
  const [vakken, setVakken] = useState([]);
  // const [vakNaam, setvakNaam] = useState("");
  // const [vakDuur, setvakDuur] = useState("");

  useEffect(() => {
    setVakken(roosterData.rooster);
  }, []);



  return (
    <section className="grid-parent">
        <h3>08:00</h3>
      <h3>09:00</h3>
      <h3>10:00</h3>
      <h3>11:00</h3>
      <h3>12:00</h3>
      <h3>13:00</h3>
      <h3>14:00</h3>
      <h3>15:00</h3>
      <h3>16:00</h3>
      <h3>17:00</h3>
      <h3>18:00</h3>
 
      <h3 className="day-styling">maandag</h3>
      <h3 className="day-styling">dinsdag</h3>
      <h3 className="day-styling">woensdag</h3>
      <h3 className="day-styling">donderdag</h3>
      <h3 className="day-styling">vrijdag</h3>

      {vakken.map((vak, index) => (
        <div
          key={index}
          className="vak"
          style={{
            gridColumn: vak.column,
            gridRow: vak.row,
            backgroundColor: "var(--lorem-academy-color)",
            color: "white",
            padding: "10px",
            margin: "2px",
            borderRadius: '1rem'
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <h4
              style={{
                marginRight: "auto",
              }}
            >
              {vak.name}
            </h4>
            <button>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      ))}


    </section>
  );
}

export default Schedule;
