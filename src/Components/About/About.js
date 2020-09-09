import React from "react";
import "./About.css";
import AboutImg from "../../img/About1.jpg";

const About = (props) => {
  return (
    <div className="about grid" id="about">
      <div className="about_text" id="about">
        <h1 className="about_title">{props.text.about_title}</h1>
        <div className="about_items">
          <div className="about_item">
            <i className="fas fa-utensils"></i>
            <div className="item_text">
              <h3>{props.text.about1}</h3>
            </div>
          </div>
          <div className="about_item">
            <i className="fas fa-wine-glass"></i>
            <div className="item_text">
              <h3>{props.text.about2}</h3>
            </div>
          </div>
          <div className="about_item">
            <i className="fas fa-baby"></i>
            <div className="item_text">
              <h3>{props.text.about3}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="hol_picture">
        <img src={AboutImg} alt="house_of_light_about" />
      </div>
    </div>
  );
};

export default About;
