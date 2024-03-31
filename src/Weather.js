import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [loader, setLoader] = useState(false);
  const [WeatherElements, setWeatherElements] = useState({});

  function showWeatherElements(response) {
    setLoader(true);
    setWeatherElements({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6782253072f7d90462731a624097fc54";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeatherElements);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
        <form className="weather-app" onSubmit={handleSubmit}>
          <label for="city" className="form-label">
            Enter a city
          </label>
          <input type="search" placeholder="City" onChange={updateCity}/>
          <input type="submit" className="btn btn-primary" value="Search" />
        </form>
  );
  if (loader) {
    return (
      <div>
        {form}
        <div className="card-body">
          <h1 className="card-title">{props.data.city}</h1>
        </div>

        <br />
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col">
              <div className="today">{props.data.date}</div>
              <div className="adjective">{props.data.description}</div>
              <div className="clearfix weather-temperature">
                <img
                  src={WeatherElements.icon}
                  alt={WeatherElements.description}
                  className="float-left"
                  width="50"
                />
              </div>
            </div>
            <div className="col">
              <div className="caracteristic">
                Humidity :{
" "}
                <span className="humidity">{WeatherElements.humidity}</span> %
                <br />
                Wind : <span className="wind">{WeatherElements.wind}</span> km/h
              </div>
            </div>
            <div className="col">
              <strong>
                <span className="temperatureToday">
                {Math.round(WeatherElements.temperature)}
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
      </div>
      </div> );
  } else {
return form;
  }
  }