import React, { useState, useEffect } from "react";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("/featured=popularity")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setFeatured(jsonRes));
  });

  return (
    <div>
      <Header />

      <div id="chapter1">
        {/* <div className="test" /> */}
        <div className="content-wrapper">
          {" "}
          <SectionTitle
            sectionTitle="Chapter 1."
            sectionDescription="Most Popular Stories"
          />
          {featured.map((story) => (
            <Link to={`/stories/${story._id}`}>
              <Chapter1 story={story}></Chapter1>
            </Link>
          ))}
          <Button
            name="View All Stories"
            onClick={() => {
              navigate("/stories");
            }}
          />
        </div>
      </div>

      <div id="chapter2" className="content-wrapper">
        <SectionTitle
          sectionTitle="Chapter 2."
          sectionDescription="Folk Tales"
        />
        <Chapter2 />
      </div>

      <div id="chapter3" className="content-wrapper">
        <SectionTitle
          sectionTitle="Chapter 3."
          sectionDescription="Disney Princesses"
        />
        <Chapter3 />
      </div>

      {/* <div id="chapter2" className="content-wrapper">
        <SectionTitle
          sectionTitle="Chapter 2."
          sectionDescription="Disney Princesses"
        />
        <Chapter2 />
      </div> */}
    </div>
  );
}

export default Home;
