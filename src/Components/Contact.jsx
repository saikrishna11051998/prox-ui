import React from "react";
import "../styles/contact.css";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <form>
        <div className="contact-row">
          <div className="input-group">
            <input type="text" id="name" required />
            <label htmlFor="name">
              <FaUserAlt /> Your Name
            </label>
          </div>
          <div className="input-group">
            <input type="number" id="number" required />
            <label htmlFor="number">
              <FaPhoneAlt />
              Contact Number
            </label>
          </div>
        </div>
        <div className="input-group">
          <input type="email" id="email" required />
          <label htmlFor="email">
            <FaEnvelope />
            Your Email
          </label>
        </div>
        <div className="input-group">
          <textarea id="message" rows="8" required></textarea>
          <label htmlFor="message">
            <FaComments /> Your Message
          </label>
        </div>
        <button type="submit">
          Submit <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Contact;