import React, { useEffect } from "react";
import "./About.css";
import Table from "./Table";
import Aos from "aos";
import "aos/dist/aos.css";

const About = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      className="about grid"
      id="about"
    >
      <div className="about_text" id="about">
        <h1 className="about_title">{props.text.about_title}</h1>
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
