import React from "react";
import punk from "../assets/header/cryptopunk-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punk} alt="" />
      </div>
    </div>
  );
};

export default Header;
