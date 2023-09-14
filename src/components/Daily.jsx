import React from 'react';
import mc from "/home/mehio/Desktop/Mehio/Weather-API/src/img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";

const DailyWeather = () => {
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
  )
}


export default DailyWeather;