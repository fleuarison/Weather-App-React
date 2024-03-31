import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Weather">
<div className="card" style={{ width: "600px" }}>
      <Weather />
      <footer>
            <div className="card">
              <div className="weather-forecast"></div>
            </div>
          </footer>
          <small>
            <a
              href="https://github.com/fleuarison/vanilla-weather_app"
              target="_blank"
            >
              Open-source code
            </a>
            by Fleuria RANOROARISON
          </small>
        </div>
      </div>;
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);