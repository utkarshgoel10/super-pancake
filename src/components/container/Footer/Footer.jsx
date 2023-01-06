import React from "react";
import "./Footer.scss";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="copyright">
        <p>
          Copyright&copy;2023 All rights reserved. Made by <span>Utkarsh</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          <a href="https://www.linkedin.com/in/goelutkarsh/">
            <div>
              <FaLinkedin />
            </div>
          </a>
          <a href="https://twitter.com/Utkarshgoel_10">
            <div>
            <FaTwitter />
            </div>
          </a>
          <a href="https://www.instagram.com/utkarsh_goel.10/">
            <div>
              <FaInstagram />
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UCStJJmtgJnLoTKBRi9cOQSg">
            <div>
              <FaYoutubeSquare />
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
