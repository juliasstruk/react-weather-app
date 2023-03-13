import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import { cleanup } from "@testing-library/react";


export default function WeatherForecast (props){
 let [loaded, setLoaded] = useState (false);  
 let [forecast, setForecast] = useState (null);  

 useEffect (() => {
    setLoaded (false);
 }, [props.coordinates]);


function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
}

if (loaded) {
    console.log(forecast);
 return (
<div className="WeatherForecast">
<div className="row">
    {forecast.map(function(dailyForecast, index) {
        if (index <5) {
return (
    <div className="col" key={index}> 
   
    <WeatherForecastDay data={dailyForecast}/>
</div>
);
        }

    })}
   
</div>
</div>
    );

} else {
    let apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrt = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrt).then(handleResponse);
    return null;
  }

}