import React from "react";
import './Google.css'
import search from '../asset/search.png';

function Google1() {
  return (
    <div class="search-bar-container">
      <input type="text" id="search-input" placeholder="Search..." />
      <button type="button" id="search-button">
        <img src={search} alt="Search" />
      </button>
    </div>
  );
}

export default Google1;
