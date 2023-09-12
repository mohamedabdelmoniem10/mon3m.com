import React from "react";

// import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container--large">
        <p className="footer__copy-rights">
          &copy; 2023 MOn3m, Built with 🫶 on Earth 🌍.
        </p>

        <div className="footer__social">
          <div className="footer__social-media">
            <p>Social</p>
            <div className="social__links">
              <a href="https://twitter.com/Mohamed_Mon3m" className="link">
                <svg className="icon">
                  <use xlinkHref="/images/sprite.svg#twitter"></use>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mon3m/" className="link">
                <svg className="icon">
                  <use xlinkHref="/images/sprite.svg#linkedin"></use>
                </svg>
              </a>
              <a
                href="https://wa.me/01111798451?text=I'm%20interested%20in%20your%20works"
                className="link"
              >
                <svg className="icon">
                  <use xlinkHref="/images/sprite.svg#whatsapp"></use>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__contact">
            <a href="mailto:mohamedabdelmoniem10@gmail.com" className="link">
              mohamedabdelmoniem10@gmail.com
            </a>
            <a href="tel:+201111798451" className="link">
              +20 111 179 8451
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
