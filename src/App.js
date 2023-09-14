import React from "react";
// import mc from "./img/weather-icons/mostlycloudy.svg";
// import clear from "./img/weather-icons/clear.svg";
// import Search from "./components/Search";
import Search from "./components/Search";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import WeatherItem from "./components/WeatherItem";

import "./App.css";
import DailyWeather from "./components/Daily";

function App() {
  return (
    <div className="App">
<Search />
<WeatherItem />
<DailyWeather />

</div>
  );
}

export default App;
