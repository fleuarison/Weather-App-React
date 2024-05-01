import React, {useState} from "react";

export default function WeatherDegree(props){
    const [unit, setUnit]=useState("celsius");
    function showFahreinheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius"){
    return (
        <div className="WeatherDegree">
        <span className="temperatureToday">
        {Math.round(props.celsius)}
      </span>
      <span className="conversion">
          °C | {" "}
          <a href="/" onClick={showFahreinheit}>°F</a>
      </span>
      </div>
    );
} else {
    let fahreinheit = (props.celsius * 9)/5 + 32;
    return 
    (
        <div className="WeatherDegree">
        <span className="temperatureToday">
        {Math.round(fahreinheit)}
      </span>
      <span className="conversion">
          <a href="/" onClick={showCelsius}>°C</a> | °F
      </span>
      </div>
    );
}
}