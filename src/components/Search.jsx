//IMPORTS

import React from "react";
import { useState } from "react"; //HOOKs (functional Component)

const Search = (props) => {
  const [search, setSearch] = useState("");  //city Name
  const handleBtnClick = () => {   //On click function
    props.searchForWeather(search)
  }
  return (
//HTML content

    <div className="wrapper-1">
      <header>
    <label> <input onChange={e=>setSearch(e.target.value)} className="city-input" type="text" placeholder="Enter A City Name"/> </label>
    <button type="button" onClick={handleBtnClick}>FIND WEATHER</button>
    </header>
  </div>
  )
}

export default Search;

