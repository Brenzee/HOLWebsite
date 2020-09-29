import React from "react";
import "./Brunch.css";

const Brunch = ({ text }) => {
  return (
    <div className="brunch about_text" id="brunch">
      <h2 className="about_title_brunch">{text.brunch_title}</h2>
      <div className="brunch_about item_text">
        <p>{text.brunch_about}</p>
      </div>
      <div className="social_media_brunch"></div>
    </div>
  );
};

export default Brunch;
