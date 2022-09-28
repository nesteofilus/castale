import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div id="btnContainer">
      <button onClick={props.onClick} className="btn">
        {props.name}
      </button>
    </div>
  );
}

export default Button;
