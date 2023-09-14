import React, { Component } from "react";
import Search from "./components/Search";
import pic from '../src/img/weather-icons/mostlycloudy.svg';
import sunny from '../src/img/weather-icons/clear.svg';


import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
function App(){
    return (
      <div className="app">
        <div className = "header">
          <input type = "text" placeholder="Enter city name"></input>
          <button>FIND WEATHER </button>
        </div>
        <div className = "main">
          <img id="img1" src={pic}></img>
          <h1>overcast clouds</h1>
          <h2>Tempreture <span>10° to 11°C</span></h2>
          <h3>Humidity <span>78%</span> Pressure <span>1000.48</span></h3>
        </div>
        <footer>
          <table>
            <tr>
            <th>03:00</th>
            <th>06:00</th>
            <th>09:00</th>
            <th>12:00</th>
            <th>15:00</th>
            <th>18:00</th>
            <th>21:00</th>
            </tr>
            <tr>
              <th><img src={pic} alt="CLOUDY" /></th>
              <th><img src={pic} alt="CLOUDY" /></th>
              <th><img src={sunny} alt="SUNNUY" /></th>
              <th><img src={sunny} alt="SUNNUY" /></th>
              <th><img src={sunny} alt="SUNNUY" /></th>
              <th><img src={sunny} alt="SUNNUY" /></th>
              <th><img src={pic} alt="CLOUDY" /></th>

            </tr>
            <tr>
              <th><p>8°C</p></th>
              <th><p>9°C</p></th>
              <th><p>14°C</p></th>
              <th><p>17°C</p></th>
              <th><p>18°C</p></th>
              <th><p>16°C</p></th>
              <th><p>13°C</p></th>

            </tr>
          </table>
        </footer>
        
      </div>
    );
  }


export default App;
