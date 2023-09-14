import React, { Component } from "react";
import mc from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import Search from "./components/Search";
import pic from '../src/img/weather-icons/mostlycloudy.svg';
import sunny from '../src/img/weather-icons/clear.svg';


import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
<header>
  <label> <input type="text" placeholder="Enter A City Name"/> </label>
  <button>FIND WEATHER</button>
  </header>
<div id="image">
<img src={mc} alt="clear" />
</div>
<div id="weather">
  <h1>Overcast Clouds</h1>
</div>
<div id="temp">
  <h1>Temperature 10° to 11℃</h1>
  <h3>Humidity <span>78%</span> Pressure <span>1008.48</span></h3>
</div>
<div id="all">
<table>
  <tr>
    <td>3:00</td>
    <td>6:00</td>
    <td>9:00</td>
    <td>12:00</td>
    <td>15:00</td>
    <td>18:00</td>
    <td>21:00</td>
  </tr>
  <tr>
   <td><img src={mc} alt="mostly-clear" /></td>
   <td><img src={mc} alt="mostly-clear" /></td> 
   <td><img src={clear} alt="clear" /></td> 
   <td><img src={clear} alt="clear" /></td>  
   <td><img src={clear} alt="clear" /></td>  
   <td><img src={clear} alt="clear" /></td>  
   <td><img src={mc} alt="mostly-clear" /></td>  
  </tr>
  <tr>
    <td>8℃</td>
    <td>9℃</td>
    <td>14℃</td>
    <td>17℃</td>
    <td>18℃</td>
    <td>16℃</td>
    <td>13℃</td>
  </tr>
</table>
</div>

</div>
  
  );
}
=======
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

>>>>>>> 099b5c7 (testing)

export default App;
