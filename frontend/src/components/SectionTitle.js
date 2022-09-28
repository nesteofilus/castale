import React from "react";
import "./SectionTitle.css";

function sectionTitle(props) {
  return (
    <div className="sectionTitleContainer">
      <h2>
        <span id="sectionTitle">{props.sectionTitle} </span>
        <span id="sectionDescription">{props.sectionDescription}</span>
      </h2>
    </div>
  );
}

export default sectionTitle;
