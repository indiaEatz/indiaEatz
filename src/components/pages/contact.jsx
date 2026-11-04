import React from "react";
import "./contact.css";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting IndiaEatz!");
  };

  return (
    <div className="contact-page">

      <section className="contact-banner">
        <h1>Contact Us</h1>
        <p>We Would Love to Hear From You!</p>
      </section>

      <div className="contact-content">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Have questions or suggestions?
            Feel free to contact our team.
          </p>

          <div className="contact-detail">
            📧 Email: support@indiaeatz.com
          </div>

          <div className="contact-detail">
            📞 Phone: +91 7507315976
          </div>

          <div className="contact-detail">
            📍 Location: India
          </div>

        </div>

        <div className="contact-form-container">

          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              placeholder="Write Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

// export default Contact;
export { Contact };