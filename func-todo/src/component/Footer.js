import React from "react";

function Footer({ filterALLTODO, filterDoneTODO, filterDoingTODO }) {
  return (
    <div className="Footer">
      <button className="footer-btn" onClick={filterALLTODO}>
        ALL
      </button>
      <button className="footer-btn" onClick={filterDoneTODO}>
        DONE
      </button>
      <button className="footer-btn" onClick={filterDoingTODO}>
        DOING
      </button>
    </div>
  );
}
export default Footer;
