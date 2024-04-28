import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response){
    setWeatherData({
      ready : true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date : "Sunday 13:00",
      description : response.data.weather[0].description,
      wind: response.data.wind.speed,
      iconUrl : "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    });
  }

  if (weatherData.ready){
    return (
      <div className="Weather">
        <div className="card" style={{ width: "600px" }}>
          <form className="weather-app">
          <div className="row">
          <div className="col-9">
            <input type="text" className="form-control" placeholder="Enter a city" autoFocus="on"/>
            </div>
          <div className="col-3">
            <input type="submit" className="btn btn-primary" value="Search" />
            </div>
            </div>
          </form>
          <div className="card-body">
            <h1 className="card-title">{weatherData.city}</h1>
          </div>
  
          <br />
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col">
                <div className="today">{weatherData.date}</div>
                <div className="text-capitalize">{weatherData.description}</div>
                <div className="clearfix weather-temperature">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Cloudy"
                    className="float-left"
                    width="50"
                  />
                </div>
              </div>
              <div className="col">
                <div className="caracteristic">
                  Humidity :{" "}
                  <span className="humidity">{weatherData.humidity}</span> %
                  <br />
                  Wind : {" "} 
                  <span className="wind">{weatherData.wind}</span> km/h
                </div>
              </div>
              <div className="col">
                <strong>
                  <span className="temperatureToday">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="conversion">
                    <a href="#" className="active">
                      °C
                    </a>{" "}
                    |<a href="#">°F</a>
                  </span>
                </strong>
              </div>
            </div>
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
          </div>
        </div>
    );

  } else {
    const apiKey = "6782253072f7d90462731a624097fc54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
  