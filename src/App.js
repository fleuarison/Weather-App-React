import React from "react";
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
          <div className="App">
            <div className="container">
      <Weather defaultCity="Antananarivo" />
      <small> Coded by <a
                href="https://www.linkedin.com/in/fleuria-arison-993ba0191/"
                target="_blank"
              >
                Fleuria RANOROARISON 
              </a> {" "} and is open-source on {" "}
              <a
                href="https://github.com/fleuarison/weather-app-react"
                target="_blank"
              >
                Github 
              </a>
            </small>
          </div>
        </div>
      );
}

