import React, { useState, useEffect } from "react";
import Carousel from "../../components/Carousel";
import "./Chapter2.css";

function Chapter2() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("/featured=Folktale")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setStories(jsonRes));
  }, []);

  return <Carousel array={stories} />;
}

export default Chapter2;
