import React from "react";
import Hand from "../images/hand.gif";

const Header = () => {
  return (
    <>
      <header className="header header--wrapper">
        <div className="media header__media">
          <img className="header__logo" src={Hand} alt="header logo" />
          <span className="header__text">Twit you quotes</span>
        </div>
      </header>
    </>
  );
};

export default Header;
