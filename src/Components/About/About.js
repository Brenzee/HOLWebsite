import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about grid" id="about">
      <div className="about_text" id="about">
        <h1 className="about_title">
          Laipni lūgti <span className="hol_color">House of Light</span> –
          mājīgā restorānā pašā Jūrmalas sirdī!
        </h1>
        <div className="about_items">
          <div className="about_item">
            <i className="fas fa-utensils"></i>
            <div className="item_text">
              Esam radījuši vietu, kur atpūsties no ikdienas steigas,{" "}
              <span>baudīt gardu maltīti</span> vai{" "}
              <span>atspirdzinošu dzērienu</span>.
            </div>
          </div>
          <div className="about_item">
            <i className="fas fa-wine-glass"></i>
            <div className="item_text">
              <span>Mūsu plašajā ēdienkartē</span> esam iekļāvuši svaigus
              salātus, uzkodas, uzkodu plates, izcilus jūras velšu ēdienus,
              veģetārus un vegānus ēdienus, pašu kūpinātu zivis un gaļu,
              burgerus, pastas, ēdienus gatavotus uz grila, kā arī izcilus
              desertus. Mūsu piedāvājumā ir arī Latvijā ražoti vīni un Latvijā
              grauzdēta kafija.
            </div>
          </div>
          <div className="about_item">
            <i className="fas fa-baby"></i>
            <div className="item_text">
              Mīļi gaidām arī ģimenes ar bērniem, jo esam parūpējušies par
              atsevišķu <span>krāsojamo bērnu ēdienkarti</span>,{" "}
              <span>atraktīvu bērnu stūrīti</span>,{" "}
              <span>āra bērna laukumiņu</span>, kā arī{" "}
              <span>pārtinamo galdiņu pašiem mazākajiem</span>.
            </div>
          </div>
        </div>
      </div>
      <div className="hol_picture"></div>
    </div>
  );
};

export default About;
