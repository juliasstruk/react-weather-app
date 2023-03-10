import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">

    <Weather defaultCity="New York"/>
      <footer>
        This project was coded by <a href="https://comforting-conkies-ab24d5.netlify.app/" target="_blank" rel="noreferrer"> Julia Struk </a> {" "} and this 
        {" "} 
      <a href="https://github.com/juliasstruk/react-weather-app" target="_blank" rel="noreferrer">
         open-sourced on GitHub
      </a>
      </footer>
    </div>
    </div>
  );
}
