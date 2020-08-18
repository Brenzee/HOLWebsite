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
              Esam radījuši vietu, kur atpūsties no ikdienas steigas, baudīt
              gardu maltīti vai atspirdzinošu dzērienu.
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
              atsevišķu bērnu ēdienkarti, atraktīvu bērnu stūrīti, kā arī
              pārtinamo galdiņu pašiem mazākajiem.
            </div>
          </div>
        </div>
      </div>
      <div className="hol_picture"></div>
    </div>
  );
};

export default About;
