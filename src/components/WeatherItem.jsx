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



const WeatherItem = (props) => {
  const convert = (x) =>{
    return (x-273.15).toFixed(2);
  }

  const imgTitle = props.data.list[0].main.temp_min;
  const imgTitlee = props.data.list[0].main.temp_max;
  const Humidity = props.data.list[0].main.humidity;
  const Pressure = props.data.list[0].main.pressure;
  return (
    <div className="wrapper-2">
      {/* {console.log(props.data)} */}
      <div id="image">
<img src={mc} alt="MostlyCloudy" />
</div>
<div id="weather">
  <h1>Overcast Clouds</h1>
</div>
<div id="temp">
  <h1>Temperature <span>{convert(imgTitle)}℃ to {convert(imgTitlee)}℃</span></h1>
  <h3>Humidity <span>{Humidity}%</span> Pressure <span>{Pressure}</span></h3>
</div>
    </div>
  )
}


export default WeatherItem;

