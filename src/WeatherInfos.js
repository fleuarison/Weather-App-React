import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherDegree from "./WeatherDegree";

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
        <div className="float-left">
          <WeatherIcon code={props.data.icon}/>
          </div>
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
          <WeatherDegree celsius={props.data.temperature} />
        </strong>
      </div>
    </div>
    </div>
    </div>);
}