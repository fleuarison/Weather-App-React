import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
    let WeatherData = {
      city: "Antananarivo",
      date: "Tuesday 16: 00",
      description: "Cloudy",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      humidity: 35,
      wind: 27,
      temperature: 19,
    };
    return (
      <div className="Weather">
        <div className="card" style={{ width: "600px" }}>
          <form className="weather-app">
            <label for="city" className="form-label">
              Enter a city
            </label>
            <input type="text" placeholder="City" />
            <input type="submit" className="btn btn-primary" value="Search" />
          </form>
          <div className="card-body">
            <h1 className="card-title">{WeatherData.city}</h1>
          </div>
  
          <br />
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col">
                <div className="today">{WeatherData.date}</div>
                <div className="adjective">{WeatherData.description}</div>
                <div className="clearfix weather-temperature">
                  <img
                    src={WeatherData.imgUrl}
                    alt={WeatherData.description}
                    className="float-left"
                    width="50"
                  />
                </div>
              </div>
              <div className="col">
                <div className="caracteristic">
                  Humidity :{" "}
                  <span className="humidity">{WeatherData.humidity}</span> %
                  <br />
                  Wind : <span className="wind">{WeatherData.wind}</span> km/h
                </div>
              </div>
              <div className="col">
                <strong>
                  <span className="temperatureToday">
                    {WeatherData.temperature}
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
              by Fleuria RANOROARISON
            </small>
          </div>
        </div>
      </div>
    );
  }
  