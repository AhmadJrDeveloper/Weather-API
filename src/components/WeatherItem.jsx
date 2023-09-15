// IMPORTS

import React from 'react';
import mc from "/home/mehio/Desktop/Mehio/Weather-API/src/img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "..//img/weather-icons/cloudy.svg";
import drizzle from "..//img/weather-icons/drizzle.svg";
import fog from "..//img/weather-icons/fog.svg";
import pc from "..//img/weather-icons/partlycloudy.svg";
import rain from "..//img/weather-icons/rain.svg";
import snow from "..//img/weather-icons/snow.svg";
import storm from "..//img/weather-icons/storm.svg";
import unknown from "..//img/weather-icons/unknown.svg";

// assign icon to related weather
//component taking props as argument
const WeatherItem = (props) => { 
  const getIcon = weatherName =>{
    switch(weatherName){
      case "Mostly Cloudy":
        return mc;
      case "Clear":
        return clear;
      case "Partly Cloudy":
        return pc;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Unknown":
        return unknown;
      case "Storm":
        return storm;
      case "Clouds":
        return cloudy;
      case "Drizzle":
        return drizzle;
      case "Fog":
        return fog;
      default:
        return unknown;
    }
  }
// Html Content
  return (
<div className="wrapper-2">
  <div id="image">
    <img src={getIcon(props.data.list[0].weather[0].main)} alt="MostlyCloudy" />
  </div>

  <div id="weather">
  <h1>{props.data.list[0].weather[0].description}</h1>
  </div>

  <div id="temp">
  <h1>Temperature <span>{props.data.list[0].main.temp_min}℃ to {props.data.list[0].main.temp_max}℃</span></h1>
  <h3>Humidity <span>{props.data.list[0].main.humidity}%</span> Pressure <span>{props.data.list[0].main.pressure}</span></h3>
  </div>
</div>
)
}


export default WeatherItem;