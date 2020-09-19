import React, { useEffect } from "react";
import "./Brunch.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Brunch = ({ text }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      className="brunch about_text"
      id="brunch"
    >
      <h1 className="about_title">{text.brunch_title}</h1>
      <div className="brunch_about item_text">
        <p>{text.brunch_about}</p>
      </div>
      <div className="social_media_brunch"></div>
    </div>
  );
};

export default Brunch;
