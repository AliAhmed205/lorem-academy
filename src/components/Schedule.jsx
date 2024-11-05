import React, { useEffect, useState } from "react";
import roosterData from "../Rooster.json";
import { Link } from "react-router-dom";
import StickyNoteSchedule from "./StickyNoteSchedule";
import "../css/Schedule.css";

function Schedule() {
  const [vakken, setVakken] = useState([]);
  const [vakNaam, setvakNaam] = useState("");
  const [vakDuur, setvakDuur] = useState("");

  useEffect(() => {
    setVakken(roosterData.rooster);
  }, []);

  const addSubject = (column) => {
    if (!vakNaam) {
      alert("Voer de naam van het vak in.");
      return;
    }

    const times = vakDuur.split("/").map(Number);
    if (
      times.length !== 2 ||
      times[0] < 3 ||
      times[1] > 14 ||
      times[0] >= times[1]
    ) {
      alert(
        "Tijd moet tussen 08:00 (3) en 18:00 (14) zitten en de eindtijd moet na de begintijd komen."
      );
      return;
    }

    const nieuwVak = {
      name: vakNaam,
      column: column,
      row: vakDuur,
    };

    const geupdateVakken = [];
    for (let i = 0; i < vakken.length; i++) {
      geupdateVakken.push(vakken[i]);
    }
    geupdateVakken.push(nieuwVak);

    setVakken(geupdateVakken);

    setvakNaam("");
    setvakDuur("");
  };

  const removeSubject = (index) => {
    const updatedVakken = vakken.filter((vak, i) => i !== index);
    setVakken(updatedVakken);
  };

  return (
    <section className="grid-container">
      {" "}
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
              borderRadius: "1rem",
            }}
          >
            <div style={{ display: "flex" }}>
              <h4 style={{ marginRight: "auto" }}>{vak.name}</h4>
              <button onClick={() => removeSubject(index)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        ))}

        <input
          type="text"
          placeholder="Naam van het vak"
          value={vakNaam}
          onChange={(event) => setvakNaam(event.target.value)}
          className="padding-2"
        />
        <input
          type="text"
          placeholder="Tijdsbereik (bijv. ' 3/5' (rij 3 tot 5))"
          value={vakDuur}
          onChange={(event) => setvakDuur(event.target.value)}
          className="padding-2"
        />
        <button className="add-vak" onClick={() => addSubject(2)}>
          + Vak toevoegen
        </button>
        <button className="add-vak" onClick={() => addSubject(3)}>
          + Vak toevoegen
        </button>
        <button className="add-vak" onClick={() => addSubject(4)}>
          + Vak toevoegen
        </button>
        <button className="add-vak" onClick={() => addSubject(5)}>
          + Vak toevoegen
        </button>
        <button className="add-vak" onClick={() => addSubject(6)}>
          + Vak toevoegen
        </button>
      </section>

      <StickyNoteSchedule /> 

        <Link className="back-to-home" to="/Home"><i class="fa-solid fa-arrow-left"></i> Terug naar home</Link>
    </section>
  );
}

export default Schedule;
