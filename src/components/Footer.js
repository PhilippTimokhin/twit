import React from "react";
import Philipp from "../images/iam.gif";
const Footer = () => {
  return (
    <>
      <footer className="footer footer--wrapper">
        <div className="media media__footer">
          <img src={Philipp} alt="footer logo" />
          <span className="media__text">Made by Philipp Timokhin</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
