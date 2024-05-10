import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
    function day() {
        let date = new Date (props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

        return days[day];
    }

    function max() {
        let degree= Math.round(props.data.temp.max);
        return `${degree}`;
    }

    function min() {
        let degree= Math.round(props.data.temp.min);
        return `${degree}`;
    }

    return (
        <div>
        <div className="ForecastDay">{day()}</div>
                <WeatherIcon code={props.data.weather[0].icon} size={32} height = {70} />
                <div className="ForecastTemperature">
                    <span className="ForecastTemperatureMax">{max()}°</span>
                    <span className="ForecastTemperatureMin">{min()}°</span>
                </div>
                </div>
    );
}