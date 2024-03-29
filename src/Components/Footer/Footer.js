import React from 'react'
import './Footer.css'

const Footer = ({ text }) => {
  return (
    <div className="outsideFooter">
      <footer className="footer" id="footer">
        <div className="contact">
          <div className="contact_item">
            <i className="fas fa-map-marker-alt"></i>
            <a
              href="https://www.google.com/maps/dir//House+Of+Light,+Jomas+iela+63,+J%C5%ABrmala,+LV-2015,+Latvija/@56.9741563,23.8050435,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x46eedd1dd9f152db:0xa1fca9e872bf689d!2m2!1d23.8072322!2d56.9741563!3e0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jomas iela 63, Jūrmala
            </a>
          </div>
          <div className="contact_item">
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+37126360603">+371 26360603</a>
          </div>
          <div className="contact_item">
            <i className="far fa-envelope"></i>
            <a href="mailto:info@hol.lv">info@hol.lv</a>
          </div>
        </div>
        <div className="working_hours">
          <div className="working_title">
            <h2>{text.working_hours}</h2>
          </div>
          <div className="day">
            <h4>{text.work_days}</h4>
            <h4>12:00 - 22:00</h4>
          </div>
          <div className="day">
            <h4>{text.work_days1}</h4>
            <h4>11:00 - 22:00</h4>
          </div>
          <div className="rights">
            <h5>{text.rights}</h5>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
