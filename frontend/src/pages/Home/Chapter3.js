import React, { useState, useEffect } from "react";
import Carousel from "../../components/Carousel";
import "./Chapter3.css";

function Chapter2() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("/featured=Disney")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setStories(jsonRes));
  }, []);

  return (
    <div>
      <Carousel array={stories} />
      {/* <div id="cover-layout" /> */}
    </div>
  );
}

export default Chapter2;
