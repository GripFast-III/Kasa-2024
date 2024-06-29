import React from "react";
import Footerlogo from "./../../Assets/LOGO-blanc.png";

const Footer = () => {
  return (
    <footer>
      <div className="logoCopyright">
        <div className="logo">
          <img className="footer__logo" src={Footerlogo} alt="logo footer" />
        </div>
        <div className="copyright">
          <h4>
            © 2020 KASA. All <br className="mobile-break" />
            rights reserved
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
