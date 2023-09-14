import React from "react";
import clear from "../img/weather-icons/clear.svg";

const Search = () => {
  return (
    <div className="wrapper-1">
      <header>
    <label> <input type="text" placeholder="Enter A City Name"/> </label>
    <button>FIND WEATHER</button>
    </header>
  </div>
  )
}

export default Search;

