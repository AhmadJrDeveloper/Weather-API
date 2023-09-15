import React from 'react';
import mc from "/home/mehio/Desktop/Mehio/Weather-API/src/img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";


const DailyWeather = (props) => {
  const convert = (x) =>{
    return (x-273.15).toFixed(2);
  }

  return (
<div className="wrapper-3">
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
    <td>{convert(props.data.list[1].main.temp)}℃</td>
    <td>{convert(props.data.list[2].main.temp)}℃</td>
    <td>{convert(props.data.list[3].main.temp)}℃</td>
    <td>{convert(props.data.list[4].main.temp)}℃</td>
    <td>{convert(props.data.list[5].main.temp)}℃</td>
    <td>{convert(props.data.list[6].main.temp)}℃</td>
    <td>{convert(props.data.list[7].main.temp)}℃</td>
  </tr>
  </table>
    </div>
</div>
  )
}


export default DailyWeather;