import React from "react";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="social_media">
      <a
        href="https://www.instagram.com/houseoflightgrilbars/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://www.facebook.com/houseoflightgrilbars/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook"></i>
      </a>
    </div>
  );
};

export default SocialMedia;
