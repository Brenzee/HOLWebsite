import React from "react";
import "./Keiterings.css";
import Bankets_img from "../../img/Keiterings.jpg";

const Keiterings = ({ text }) => {
  return (
    <div className="bankets" id="keiterings">
      <div className="bankets_grid">
        <div className="image">
          <img src={Bankets_img} alt="izbraukuma bankets" />
        </div>
        <div className="about_bankets">
          <div className="bankets_title">{text.banquet_title}</div>
          <div className="bankets_subtitle">
            <div>{text.banquet_subtitle}</div>
          </div>
          <div className="bankets_items">
            <div className="bankets_item">
              <i className="fas fa-utensils"></i>
              <div className="bankets_text">{text.banquet1}</div>
            </div>
            <div className="bankets_item">
              <i className="fas fa-truck"></i>
              <div className="bankets_text">{text.banquet2}</div>
            </div>
            <div className="bankets_item">
              <i className="fas fa-user-tie"></i>
              <div className="bankets_text">{text.banquet3}</div>
            </div>
            <div className="bankets_item">
              <i className="fas fa-address-card"></i>
              <div className="bankets_text">
                {text.banquet4}
                <a className="blue" href="mailto:raitis@hol.lv">
                  {" "}
                  {text.banquet_email}
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keiterings;
