import React from "react";
import "./Keiterings.css";
import Bankets_img from "../../img/Keiterings.jpg";

const Keiterings = ({ text }) => {
  return (
    <div className="bankets" id="keiterings">
      <div className="bankets_grid">
        <div className="image">
          <img src={Bankets_img} alt="house_of_light_bankets" />
        </div>
        <div className="about_bankets">
          <div className="bankets_title">
            <h1>{text.banquet_title}</h1>
          </div>
          <div className="bankets_subtitle">
            <h2>{text.banquet_subtitle}</h2>
          </div>
          <div className="bankets_items">
            <div className="bankets_item">
              <i className="fas fa-utensils"></i>
              <div className="bankets_text">
                <p>{text.banquet1}</p>
              </div>
            </div>
            <div className="bankets_item">
              <i className="fas fa-truck"></i>
              <div className="bankets_text">
                <p>{text.banquet2}</p>
              </div>
            </div>
            <div className="bankets_item">
              <i className="fas fa-user-tie"></i>
              <div className="bankets_text">
                <p>{text.banquet3}</p>
              </div>
            </div>
            <div className="bankets_item">
              <i className="fas fa-address-card"></i>
              <div className="bankets_text">
                <p>
                  {text.banquet4}{" "}
                  <a className="blue" href="mailto:raitis@hol.lv">
                    {text.banquet_email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keiterings;
