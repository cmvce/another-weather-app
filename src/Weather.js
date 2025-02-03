import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Info from "./Info";
import Date from "./Date";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getWeather(response) {
    const date = new Date(response.data.time * 1000);
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: date,
    });
  }

  function submit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "80oc158tb64caae306c6eb4bf7cef14f";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(getWeather);
  }

  return (
    <div className='Weather'>
      <div className='container'>
        <form onSubmit={submit}>
          <input
            type='search'
            placeholder='Enter a city..'
            onChange={updateCity}
          />
          <input type='button' value='Search' />
        </form>
        <Info data={weather} />
      </div>
    </div>
  );
}
