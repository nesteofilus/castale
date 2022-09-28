import React from "react";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "green",
      }}
      onClick={onClick}
    />
  );
}

export default PrevArrow;
