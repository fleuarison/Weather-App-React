import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="ForecastDay">Tue</div>
                    <WeatherIcon code="13d" size={32}/>
                    <div className="ForecastTemperature">
                        <span className="ForecastTemperatureMax">7°</span>
                        <span className="ForecastTemperatureMin">-4°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}