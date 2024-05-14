import React from "react";
import "./Navbar1.css";

function Navbar1() {
  return (
    <nav className="container-fluid">
      <div className="mt-3">
        <div className="App-logo" />
        <div className="box1">
          <textarea
            className="input1"
            style={{ resize: "none", padding: "10px 10px 10px 25px" }}
            defaultValue={"skd.com"}
          ></textarea>
          <div className="mike1"></div>
          <div className="search-by-image1"></div>
          <div className="search1"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
