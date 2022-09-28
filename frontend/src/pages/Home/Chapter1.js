import React from "react";
import "./Chapter1.css";

function Chapter1({ story }) {
  return (
    <div className="row">
      <div className="row-image">
        <img
          src={story.image}
          alt="Unable to load"
          width="100%"
          height="235px"
          style={{ objectFit: "cover" }}
          className="storyImage"
        />
      </div>
      <div className="row-content-container">
        <div className="row-content-wrapper">
          <h3 className="row-title">{story.title}</h3>
          <p className="row-description">{story.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Chapter1;
