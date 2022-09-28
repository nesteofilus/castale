import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isHomeMousedOver, setHomeMouseOver] = useState(false);

  const handleHomeMouseOver = () => {
    setHomeMouseOver(true);
  };
  const handleHomeMouseOut = () => {
    setHomeMouseOver(false);
  };

  const [isStoriesMousedOver, setStoriesMouseOver] = useState(false);

  const handleStoriesMouseOver = () => {
    setStoriesMouseOver(true);
  };
  const handleStoriesMouseOut = () => {
    setStoriesMouseOver(false);
  };

  return (
    <nav>
      <Link to="/" className="nav-links">
        <div
          id="nav-home"
          className="nav"
          onMouseOver={handleHomeMouseOver}
          onMouseOut={handleHomeMouseOut}
          style={{ textDecoration: isHomeMousedOver && "underline" }}
        >
          <div className="nav-items home">Home</div>
        </div>
      </Link>
      <Link to="/stories" className="nav-links">
        <div
          id="nav-stories"
          className="nav"
          onMouseOver={handleStoriesMouseOver}
          onMouseOut={handleStoriesMouseOut}
          style={{ textDecoration: isStoriesMousedOver && "underline" }}
        >
          <div className="nav-items stories">Stories</div>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
