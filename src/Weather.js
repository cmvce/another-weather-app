import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState("");

  return (
    <div className='Weather'>
      <div className='container'>
        <form>
          <input type='search' placeholder='Enter a city..' />
          <input type='button' value='Search' />
        </form>
      </div>
    </div>
  );
}
