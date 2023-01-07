import { motion } from "framer-motion";
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./components/container/About/About";
import Contact from "./components/container/Contact/Contact";
import Footer from "./components/container/Footer/Footer";
import Portfolio from "./components/container/Portfolio/Portfolio";
import Skills from "./components/container/Skills/Skills";
import SmoothScroll from "./components/container/SmoothScroll/SmoothScroll";
import Navbar from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <motion.div>
      <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #fff",
        }}
      />
      <SmoothScroll>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </SmoothScroll>
      </motion.div>
    </BrowserRouter>
  </React.StrictMode>
);
