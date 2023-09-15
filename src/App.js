import React from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import DailyWeather from "./components/Daily";
import fakeData from "./fakeWeatherData.json";
import "./App.css";

function App() {
  return (
    <div className="App">
<Search />
<WeatherItem data={fakeData}/>
<DailyWeather data={fakeData}/>
</div>
  );
}

export default App;