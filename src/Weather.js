import React, { useState } from "react";
import WeatherInfos from "./WeatherInfos";
import axios from "axios";
import {ThreeDots} from 'react-loader-spinner';
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city,setCity]=useState(props.defaultCity);
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready : true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description : response.data.weather[0].description,
      wind: response.data.wind.speed,
      iconUrl : `https://openweathermap.org/img/wn/response.data.weather[0].icon@2x.png`,
      icon : response.data.weather[0].icon
    });
  }

  function search(){
    const apiKey = "6782253072f7d90462731a624097fc54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handlesubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
setCity(event.target.value);
  }

  if (weatherData.ready){
    return (
      <div className="Weather">
        <div className="card" style={{ width: "600px" }}>
          <form className="weather-app" onSubmit={handlesubmit}>
          <div className="row">
          <div className="col-9">
            <input type="text" className="form-control" placeholder="Enter a city" autoFocus="on" onChange={handleCityChange}/>
            </div>
          <div className="col-3">
            <input type="submit" className="btn btn-primary" value="Search" />
            </div>
            </div>
          </form>
          <WeatherInfos data={weatherData}/>
            <footer>
              <div className="card">
                <div className="weather-forecast" id="forecast"></div>
              </div>
            </footer>
            <small>
              <a
                href="https://github.com/fleuarison/weather-app-react"
                target="_blank"
              >
                Open-source code 
              </a>
              {" "} by Fleuria RANOROARISON
            </small>
            </div>
          </div>);
  } else {
    search();
    return (<ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#dbd8d8"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />);
  }
}
  