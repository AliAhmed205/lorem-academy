import React, { useEffect, useState } from "react";
import roosterData from "../Rooster.json";

function Schedule() {
  const [vakken, setVakken] = useState([]);
  const [vakNaam, setvakNaam] = useState("");
  const [vakDuur, setvakDuur] = useState("");

  useEffect(() => {
    setVakken(roosterData.rooster);
  }, []);

  return (
    <section className="grid-parent">
    </section>
  );
}

export default Schedule;
