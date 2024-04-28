import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfos(props) {
    return (
    <div className="WeatherInfos">
    <div className="card-body">
    <h1 className="card-title">{props.data.city}</h1>
  </div>

  <br />
  <div className="container text-center">
    <div className="row align-items-center">
      <div className="col">
        <div className="today">
          <FormattedDate date={props.data.date}/>
          </div>
        <div className="text-capitalize">{props.data.description}</div>
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
          <span className="humidity">{props.data.humidity}</span> %
          <br />
          Wind : {" "} 
          <span className="wind">{props.data.wind}</span> km/h
        </div>
      </div>
      <div className="col">
        <strong>
          <span className="temperatureToday">
            {Math.round(props.data.temperature)}
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
    </div>);
}