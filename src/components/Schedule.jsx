import React from "react";
import roosterData from "../Rooster.json";
import "../css/Schedule.css"

function Schedule() {
  // const [vakken, setVakken] = useState([]);
  // const [vakNaam, setvakNaam] = useState("");
  // const [vakDuur, setvakDuur] = useState("");

  // useEffect(() => {
  //   setVakken(roosterData.rooster);
  // }, []);

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

      <h3>maandag</h3>
      <h3>dinsdag</h3>
      <h3>woensdag</h3>
      <h3>donderdag</h3>
      <h3>vrijdag</h3>

    </section>
  );
}

export default Schedule;
