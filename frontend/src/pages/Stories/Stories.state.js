import { useState, useEffect } from "react";

function useStories() {
  const [selected, setSelected] = useState("All");

  const [categories, setCategories] = useState([]);

  const [inputText, setInputText] = useState("");

  const [stories, setStories] = useState([
    {
      title: "",
      description: "",
      image: "",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(8);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get Current Posts
  const indexOfLastStory = currentPage * postsPerPage;
  const indexOfFirstStory = indexOfLastStory - postsPerPage;
  var currentPosts = stories.slice(indexOfFirstStory, indexOfLastStory);

  useEffect(() => {
    fetch("/categories")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setCategories(jsonRes));
  });

  useEffect(() => {
    if (inputText !== "" && selected !== "All") {
      fetch(`/search/category=${selected}&title=${inputText}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonRes) =>
          setStories(jsonRes.sort((a, b) => a.title.localeCompare(b.title)))
        );
    } else if (inputText === "" && selected !== "All") {
      fetch(`/search/category=${selected}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonRes) =>
          setStories(jsonRes.sort((a, b) => a.title.localeCompare(b.title)))
        );
    } else if (inputText !== "" && selected === "All") {
      fetch(`/search/title=${inputText}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonRes) =>
          setStories(jsonRes.sort((a, b) => a.title.localeCompare(b.title)))
        );
    } else if (inputText === "" && selected === "All") {
      fetch(`/all-stories`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonRes) =>
          setStories(jsonRes.sort((a, b) => a.title.localeCompare(b.title)))
        );
    }
  }, [selected, inputText]);

  const onSearch = (value) => {
    setInputText(value);
    setCurrentPage(1);
  };

  const onFilter = (value) => {
    setSelected(value);
    setCurrentPage(1);
  };

  return {
    selected,
    categories,
    inputText,
    onSearch,
    onFilter,
    stories,
    currentPosts,
    postsPerPage,
    paginate,
    currentPage,
  };
}

export default useStories;
