import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <div className="contact_item">
          <i class="fas fa-map-marker-alt"></i>
          <a
            href="https://www.google.com/maps/dir//House+Of+Light,+Jomas+iela+63,+J%C5%ABrmala,+LV-2015,+Latvija/@56.9741563,23.8050435,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x46eedd1dd9f152db:0xa1fca9e872bf689d!2m2!1d23.8072322!2d56.9741563!3e0"
            target="_blank"
          >
            Jomas iela 63, Jūrmala
          </a>
        </div>
        <div className="contact_item">
          <i class="fas fa-phone-alt"></i>
          <div className="phone">+371 26360603</div>
        </div>
        <div className="contact_item">
          <i class="far fa-envelope"></i>
          <a href="mailto:info@hol.lv">info@hol.lv</a>
        </div>
      </div>
      <div className="working_hours">
        <div className="working_title">
          <h1>Darba laiks</h1>
        </div>
        <div className="day">
          <h3>P. - Sv.</h3>
          <h4>12:00 - 23:00</h4>
        </div>
        <div className="rights">
          <h4>SIA House of Light, Visas tiesības aizsargātas</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
