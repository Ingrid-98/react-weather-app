import React from "react";
import ReactDOM from "react-dom";
import WeatherSearchEngine from "./WeatherSearchEngine";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearchEngine />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
