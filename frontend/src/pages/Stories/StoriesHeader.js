import "./StoriesHeader.css";

function Header() {
  return (
    <div id="head" style={{ position: "relative" }}>
      {/* <h1 className="storiesTitle">
        Stories
      </h1> */}
      <img
        src={`${process.env.PUBLIC_URL}/images/storiesTitle.png`}
        id="storiesTitle"
        alt="Unable to load"
      />

      <div id="cover-layout" />
    </div>
  );
}
export default Header;
