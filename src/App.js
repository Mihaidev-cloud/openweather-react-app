import './fonts.css'
import './App.css';
import React, { useState } from 'react';
const api = {
  key: "91345961d4cdcc6208d80d712e50f7ca",
  base: "https://api.openweathermap.org/data/2.5/" 
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
Weather React App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="https://github.com/Mihaidev-cloud/openweather-react-app">Github</a>
        <a class="nav-link" href="https://openweathermap.org/">openweather</a>
      </div>
    </div>
  </div>
</nav>
      <p>&zwnj; </p>

      <div className="main-text">
      <h1><span>Weather React App</span></h1>
      <p>This Weather App , have been made in react and openweather api</p>
  <p>How it works? Just search a city or a country via the search box!</p>
      </div>
<main>
 
  {(typeof weather.main != "undefined") ? (
    <div id="info-weather-text">
  <div className="location-box">
    <div className="location">{weather.name}, {weather.sys.country}</div>
    <div className="date">{dateBuilder(new Date())}</div>
  </div>
  <div className="weather-box">
    <div className="temp">
   Currently is  {Math.round(weather.main.temp)}°c
    </div>
    <div className="weather">And the weather is {weather.weather[0].main}</div>
  </div>


  </div>
  ) : ('')}

 <div className="search-box">
    <input 
    type="text"
    className="search-bar"
    placeholder="Search by the country or city"
    onChange={e => setQuery(e.target.value)}
    value={query}
    onKeyPress={search}
    />
  </div>


</main>
    </div>



  );
}

export default App;