import React, { useState } from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import SnapList from "../../components/SnapList/SnapList";
import FilterList from "../../components/FilterList/FilterList";
function HomePage() {

  const [displayTags, setDisplayTags] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");

  function handleDisplayTags() {
    setDisplayTags(!displayTags);
  }

  function handleTagClick(clickedTag) {
    setSelectedTag((prevTag) => (prevTag === clickedTag ? "" : clickedTag));
  }
  return (
    <>
      <Header
        page="home"
        handleDisplayTags={handleDisplayTags}
        displayTags={displayTags}
      />
      <div className="content">
        <div className={`container ${displayTags ? "container--open" : ""}`}>
          {displayTags && (
            <FilterList
              handleTagClick={handleTagClick}
              selectedTag={selectedTag}
            />
          )}
        </div>

        <main className="main">
          <div className="main__heading">
            <p className="main__subheading">Our mission:</p>
            <h3 className="main__para">
              Provide photographers a space to share photos of the neighborhoods
              they cherish, &nbsp;
              <span className="main__para-italic">
                expressed in their unique style.
              </span>
            </h3>
          </div>
          <SnapList selectedTag={selectedTag} />
        </main>
      </div>
    </>
  );
}

export default HomePage;
