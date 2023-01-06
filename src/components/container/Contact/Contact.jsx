import React from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";

const Contact = () => {
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
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-80, 0], opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text">
          If you'd like to hire me or would like to get in touch for mentorship, assistance, or to discuss a project, please don't hesitate to reach out. I am always open to helping out and discussing new ideas. Feel free to contact me for any reason and I will do my best to assist you. I look forward to hearing from you and discussing how I can be of assistance.
          </p>          
          {/* {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })} */}
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
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="btn"
          >
            <a href="#">Send</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
