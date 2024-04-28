import React from "react";

function Footer({ handleShowAll, handleShowDone, handleShowDoing }) {
  return (
    <div className="Footer">
      <button className="footer-btn" onClick={handleShowAll}>
        ALL
      </button>
      <button className="footer-btn" onClick={handleShowDone}>
        DONE
      </button>
      <button className="footer-btn" onClick={handleShowDoing}>
        DOING
      </button>
    </div>
  );
}
export default Footer;
