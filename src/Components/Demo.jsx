import React from "react";
import "./Demo.css";
import logo from "../asset/logo1.png";
import mike from "../asset/mike.png";
import searchByImg from "../asset/search-by-image.png";
import search from "../asset/search.png";

function Demo() {
  return (
    <nav className="myNav">
      <div className="myNav logo">
        <img src={logo} alt="Logo_here" />
      </div>
      <div className="row">
        <div className="col-6">
          <div className="myNav Box ">
            <div className="search-box d-flex gap-3 flex-sm-shrink-1 ">
              <input type="text" />
              <img src={mike} alt="" className="mike"/>
              <img src={searchByImg} alt="" />
              <img src={search} alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Demo;
