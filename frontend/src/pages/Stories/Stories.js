import React from "react";
import { Link } from "react-router-dom";
import { FormControl, NativeSelect } from "@mui/material";
import "./Stories.css";
import StoriesDetails from "./StoriesDetails";
import Search from "../../components/Search";
import useStories from "./Stories.state";
import Pagination from "../../components/Pagination";
import StoriesHeader from "./StoriesHeader";

function Stories() {
  const {
    selected,
    inputText,
    categories,
    onFilter,
    onSearch,
    stories,
    currentPosts,
    postsPerPage,
    paginate,
    currentPage,
  } = useStories();

  const selectHandleChange = (e) => {
    onFilter(e.target.value);
  };

  const inputHandleChange = (e) => {
    onSearch(e.target.value.trim().replace(/[^a-zA-Z0-9 ]/g, ""));
  };

  return (
    <div id="storiesWrapper">
      <StoriesHeader />

      <div className="content-wrapper">
        <div id="searchWrapper">
          <Search value={inputText} onChange={inputHandleChange} />
          <FormControl fullWidth id="dropdown">
            <NativeSelect value={selected} onChange={selectHandleChange}>
              <option value="All">All</option>
              {categories.map((category, index) => (
                <option value={category.category}>{category.category}</option>
              ))}
            </NativeSelect>
          </FormControl>
        </div>

        <div id="story-list">
          {currentPosts === 0 ? (
            <h1 id="noStories">Oops! No Stories Found</h1>
          ) : (
            currentPosts.map((story, index) => {
              return (
                <Link
                  to={`${story._id}`}
                  style={{ textDecoration: "none" }}
                  className="storyListWrapper"
                >
                  <StoriesDetails story={currentPosts} index={index} />
                </Link>
              );
            })
          )}
        </div>

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={stories.length}
          paginate={paginate}
          currPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Stories;
