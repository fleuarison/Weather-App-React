import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
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