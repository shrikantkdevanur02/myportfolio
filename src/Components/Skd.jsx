import React from "react";
import "./Skd.css";

function Skd() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="row">
          <div className="col-12 cols">
            <div className="image" />
          </div>
          <div className="col-12 cols">
            <div className="box">
              <div className="search" />
              <textarea className="input" style={{ resize: "none" }}>
                {" skd.com"}
              </textarea>
              <div className="mike" />
              <div className="search-by-image" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Skd;
