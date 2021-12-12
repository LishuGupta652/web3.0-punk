import React from "react";
import punk from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punk} alt="punlog" className="punklogo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Collection, items or user"
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>MarketPlace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeIcon} alt="" className="themeImage" />
        </div>
      </div>
    </div>
  );
};

export default Header;
