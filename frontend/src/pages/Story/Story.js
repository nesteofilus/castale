import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cover from "./Cover";
import Title from "./Title";
import Content from "./Content";

function Story() {
  const { id } = useParams();

  const [stories, setStories] = useState([
    {
      title: "",
      content: "",
      image: "",
    },
  ]);

  useEffect(() => {
    fetch(`/story/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setStories(jsonRes));
  });

  return (
    <div id="story">
      {stories.map((story) => {
        return (
          <div>
            <Cover imgURL={story.image} />
            <div className="content-wrapper">
              <Title title={story.title} />
              <Content content={story.content} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Story;
