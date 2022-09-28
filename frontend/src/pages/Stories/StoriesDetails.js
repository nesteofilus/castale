import React from "react";
import "./StoriesDetails.css";

function StoriesDetails({ story, index }) {
  function truncate(str) {
    return str.length >= 30
      ? str.substring(29, 30) === " "
        ? str.substring(0, 29) + "..."
        : str.substring(0, 30) + "..."
      : str;
  }

  return (
    <div className="storiesDetails">
      <div>
        <img src={story[index].image} alt="Unable to load" id="storyImage" />
      </div>

      <div className="storiesDetailsWrapper">
        <h2 id="storyTitle">{truncate(story[index].title)}</h2>
        <p id="storyDescription">{story[index].description}</p>
      </div>
    </div>
  );
}

export default StoriesDetails;
