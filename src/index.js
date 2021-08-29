import React from "react";
import ReactDOM from "react-dom";
import WeatherSearchEngine from "./WeatherSearchEngine";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearchEngine />
      <footer>
        {" "}
        <a
          href="https://github.com/Ingrid-98/react-weather-app"
          target="_blank"
        >
          Open-source code
        </a>
        , by{" "}
        <a
          href="https://www.linkedin.com/in/ingrid-opdebeeck-1b1b11148/"
          target="_blank"
        >
          Ingrid Opdebeeck
        </a>{" "}
      </footer>
      ;
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
