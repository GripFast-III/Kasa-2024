import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoKasa from "./../../Assets/LOGO.png";

const Header = () => {
  return (
    <header className="up">
      <div className="imglogo">
        <Link to="/" className="header__link">
          <img src={logoKasa} alt="Logo Kasa" />
        </Link>
      </div>
      <div className="navigation">
        <nav className="header__nav">
          <NavLink to="/" activeclassname="active" className="header__link">
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            activeclassname="active"
            className="header__link"
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
