import React from "react";
import "./Cover.css";

function Cover(props) {
  return (
    <div style={{ position: "relative" }}>
      <div
        id="cover-image"
        style={{ backgroundImage: `url(${props.imgURL})` }}
      />
      <div id="cover-layout" />
    </div>
  );
}

export default Cover;
