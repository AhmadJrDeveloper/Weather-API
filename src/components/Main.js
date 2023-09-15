import mc from "../img/weather-icons/mostlycloudy.svg";
import React from "react";

const main=(props)=>{

    const convert = (x)=>{
        return (x - 273.15).toFixed(2)
    }



    return(
        <div className="main">
            <div id="image">
            <img src={mc} alt="clear" />
            </div>
            <div id="weather">
            <h1>Overcast Clouds</h1>
            </div>
            <div id="temp">
            <h1>Temperature {convert(props.data.list[0].main.temp_min)}° to {convert(props.data.list[0].main.temp_max)}℃</h1>
            <h3>Humidity <span>{props.data.list[0].main.humidity}%</span> Pressure <span>{props.data.list[0].main.pressure}</span></h3>
            </div>
            </div>
    );
}
export default main;