import React, {useState} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";


export default function WeatherForecast (props){
 let [loaded, setLoaded] = useState (false);  
 let [forecast, setForecast] = useState (null);  

function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
}

if (loaded) {
    console.log(forecast);
 return (
<div className="WeatherForecast">
<div className="row">
    <div className="col"> 
    <WeatherForecastDay data={forecast[0]}/>
</div>
</div>
</div>
    );

} else {
   
let apiKey = "ad793a6d772939c31783de5822791acf";  
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrt= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


axios.get(apiUrt).then(handleResponse);

return null;

}

}