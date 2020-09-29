import React from "react";
import "./SocialMedia.css";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <div className="social_media">
      <motion.a
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 1.5, bounce: 0.4, type: "spring" }}
        href="https://www.instagram.com/houseoflightgrilbars/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </motion.a>
      <motion.a
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.2,
          duration: 1.5,
          bounce: 0.4,
          type: "spring",
        }}
        href="https://www.facebook.com/houseoflightgrilbars/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook"></i>
      </motion.a>
    </div>
  );
};

export default SocialMedia;
