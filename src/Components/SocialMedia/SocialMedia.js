import React, { useEffect, useState } from "react";
import "./SocialMedia.css";
import { AnimatePresence, motion } from "framer-motion";

const SocialMedia = () => {
  const [showMedia, setShowMedia] = useState(false);
  useEffect(() => {
    setShowMedia(true);
  }, []);

  return (
    <div className="social_media">
      <AnimatePresence initial={false}>
        {showMedia && (
          <>
            <motion.a
              key={"instagram"}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{
                delay: 1,
                duration: 1.5,
                bounce: 0.4,
                type: "spring",
              }}
              href="https://www.instagram.com/houseoflightgrilbars/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
            <motion.a
              key={"facebook"}
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
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialMedia;
