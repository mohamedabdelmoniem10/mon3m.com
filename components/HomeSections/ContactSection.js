import React from "react";
import ContactForm from "./comp/ContactForm";

const ContactSection = () => {
  return (
    <section className="contact block">
      <div className="container">
        <h2>Contact</h2>
        <div className="grid grid--1x2">
          <div className="contact__title">
            <p>Have a questions, offers on cooperation?</p>
            <p>Feel free to contact me!</p>
            <div className="contact__info">
              {/* <!-- address --> */}
              <p>Cairo, Egypt.</p>
              {/* <!-- mail --> */}
              <p>
                <a
                  href="mailto:dev@mon3m.com"
                  className="link link--under-line"
                >
                  dev@mon3m.com
                </a>
              </p>
              {/* <!-- phone number --> */}
              <p>
                <a href="tel:+201111798451" className="link link--under-line">
                  +20 111 1798 451
                </a>
              </p>
            </div>
          </div>
          <div className="contact__form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
