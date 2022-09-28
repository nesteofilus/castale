import React from "react";
import "./Content.css";

function Content(props) {
  return (
    <div className="story-content">
      <pre className="story-content">{props.content}</pre>
    </div>
  );
}

export default Content;
