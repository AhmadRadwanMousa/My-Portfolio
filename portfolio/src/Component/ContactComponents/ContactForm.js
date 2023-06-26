import React from "react";
import "../../ComponentStyle/ContactComponentStyle/ContactForm.css";
export default function ContactForm() {
  const handelContactForm = (event) => {
    event.preventDefault();
  };
  return (
    <div className="contact-form-holder">
      <div className="form-header-p">
        Let’s work <span>together.</span>
      </div>
      <form className="contact-form" onSubmit={handelContactForm}>
        <input className="form-input-data" placeholder="Name *"></input>
        <input className="form-input-data" placeholder="Email *"></input>
        <input className="form-input-data" placeholder="Subject *"></input>
        <textarea
          className="form-input-message"
          placeholder="Your Message *"></textarea>
        <button className="contact-form-button">Send Message</button>
      </form>
    </div>
  );
}
