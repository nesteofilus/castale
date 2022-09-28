import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <div id="searchContainer">
      {/* <img
        src={`${process.env.PUBLIC_URL}/images/search-icon.webp`}
        style={{ width: "1.5%", position: "absolute" }}
      ></img> */}
      <input
        onChange={props.onChange}
        value={props.inputText}
        type="text"
        placeholder="Search stories..."
        id="search"
      />
    </div>
  );
}

export default Search;
