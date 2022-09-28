import React from "react";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} style={{ display: "block" }} onClick={onClick} />
  );
}

export default NextArrow;
