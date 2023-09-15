// IMPORTS
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

//ES6 function with props as argument
//functional component

const DailyWeather = (props) => {
  const getIcon = weatherName =>{

//Set icon to the related weather using switch statement

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
  return (

// Html Content

<div className="wrapper-3">
    <div id="all">
    <table>
  <tr>
    <td className='h-1'>3:00</td>
    <td className='h-2'>6:00</td>
    <td className='h-3'>9:00</td>
    <td className='h-4'>12:00</td>
    <td className='h-5'>15:00</td>
    <td className='h-6'>8:00</td>
    <td className='h-7'>21:00</td>
  </tr> 
  <tr>
  <td className="img">  
  {/* Iterating through images using index */}
        {
        [1,2,3,4,5,6,7].map((indexNumber)=>{
          return <img className={"image-icon " + indexNumber} src={getIcon(props.data.list[indexNumber].weather[0].main)} alt="" />
        })
      }

  </td>
  </tr>
  {/* Getting props of each temperature */}
  <tr>
    <td>{props.data.list[1].main.temp}℃</td>
    <td>{props.data.list[2].main.temp}℃</td>
    <td>{props.data.list[3].main.temp}℃</td>
    <td>{props.data.list[4].main.temp}℃</td>
    <td>{props.data.list[5].main.temp}℃</td>
    <td>{props.data.list[6].main.temp}℃</td>
    <td>{props.data.list[7].main.temp}℃</td>
  </tr>
  </table>
    </div>
</div>
  )
}


export default DailyWeather;
