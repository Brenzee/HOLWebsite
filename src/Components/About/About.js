import React from "react";
import "./About.css";
import Table from "./Table";

const About = (props) => {
  return (
    <div className="about grid" id="about">
      <div className="about_text" id="about">
        <h2 className="about_title">{props.text.about_title}</h2>
        <div className="about_items">
          <div className="about_item">
            <i className="fas fa-utensils"></i>
            <div className="item_text">
              <p>{props.text.about1}</p>
            </div>
          </div>
          <div className="about_item">
            <i className="fas fa-wine-glass"></i>
            <div className="item_text">
              <p>{props.text.about2}</p>
            </div>
          </div>
          <div className="about_item">
            <i className="fas fa-baby"></i>
            <div className="item_text">
              <p>{props.text.about3}</p>
            </div>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default About;
