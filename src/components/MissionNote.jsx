import React from "react";

const MissionNote = () => {
  return (
    <>
      <section className="sticky-note-container mission a_flex">
        <div></div>
        <section className="sticky-note a_flex">
          <h1>Welkom 'Peter' ;)</h1>
          <p>
            Vandaag ben jij voor een dag docent. Je krijgt daarom ook een
            opdracht mee! Het rooster van de <b>STUDENTEN</b> moet aangepast
            worden. Maar first things first, probeer maar eerst in te loggen. 
            <b> Inloggegevens staan hier links</b>
          </p>
        </section>
      </section>
      <section className="sticky-note-container side-mission a_flex">
        <div></div>
        <section className="sticky-note a_flex">
          <h1>Oh ja!</h1>
          <p>
            Als je straks bent ingelogd... probeer ook te kijken of je misschien
            berichten van andere docenten kunt liken. Gerrie is een nieuwe
            docent op Lorem Academy, dus misschien is het aardig als je haar bericht liket?
          </p>
        </section>
      </section>
    </>
  );
};

export default MissionNote;
