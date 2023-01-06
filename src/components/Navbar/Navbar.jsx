import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import {  motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from "../../Data";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <motion.div
      initial={{ y: -25 }}
      animate={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className={scroll ? "header active" : "header"}
    >
      <div className="Nav_container">
        <div className="logo">
          <h3>U</h3>
        </div>
        <ul className="nav_links">
          {navLinks.map((navlink, index) => {
            return (
              <li key={index}>
                <Link to={navlink}>{navlink}</Link>
              </li>
            );
          })}
        </ul>
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
        <div className="menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>
        <motion.div
          className="closeMenu"
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>

        <motion.div
          variants={navLinkVariants}
          animate={toggle ? "visible" : "hidden"}
          className="menuX"
        >
          <HiX onClick={() => setToggle(false)} />
          {navLinks.map((navlink, index) => {
            return (
              <li key={index}>
                <Link to={navlink} onClick={() => setToggle(false)}>
                  {navlink}
                </Link>
              </li>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
