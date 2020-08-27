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
              Mūsu plašajā ēdienkartē esam iekļāvuši svaigus salātus, uzkodas,
              uzkodu plates, izcilus gaļas, zivs, veģetārus un pat vegānus
              pamatēdienus, burgerus, pastas, ēdienus gatavotus uz grila, kā arī
              izcilus desertus.
            </div>
          </div>
          <div className="about_item">
            <i className="fas fa-child"></i>
            <div className="item_text">
              Mīļi gaidām arī ģimenes ar bērniem, jo esam parūpējušies par
              atsevišķu <span>bērnu ēdienkarti</span>,{" "}
              <span>atraktīvu bērnu stūrīti</span>, kā arī{" "}
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
