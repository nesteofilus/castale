import React from "react";
import "./Header.css";

function Header() {
  return (
    <div style={{ position: "relative" }}>
      <div id="header">
        <div id="leftHeader">
          <img
            id="headerPic"
            src={`${process.env.PUBLIC_URL}/images/headerPic.png`}
            alt="Unable to load"
          />
        </div>
        <div id="rightHeader">
          <img
            src={`${process.env.PUBLIC_URL}/images/homeTitle.png`}
            id="titleImg"
            alt="Unable to load"
          />
        </div>
      </div>
      <div id="cover-layout" />
    </div>
  );
}

export default Header;
