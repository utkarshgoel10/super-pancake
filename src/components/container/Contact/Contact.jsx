import { React, useRef } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_88tx0q4",
      "template_c3vh6kt",
      form.current,
      "hDeRlK-5jXDd9ZbDm"
    );
    e.target.reset();
  };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <form ref={form} onSubmit={sendEmail} className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-80, 0], opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text">
            If you'd like to hire me or would like to get in touch for
            mentorship, assistance, or to discuss a project, please don't
            hesitate to reach out. I am always open to helping out and
            discussing new ideas. Feel free to contact me for any reason and I
            will do my best to assist you. I look forward to hearing from you
            and discussing how I can be of assistance.
          </p>          
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [80, 0], opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="row">
            <input type="email" placeholder="Email" />
          </div>
          <div className="row">
            <textarea placeholder="Message"></textarea>
          </div>
          <motion.div
            // whileHover={{ scale: 1.1 }}
            // transition={{ duration: 0.3 }}
            // className="btn"
          >
            <button type="submit">Send</button>
          </motion.div>
        </motion.div>
      </form>
    </div>
  );
};

export default Contact;
