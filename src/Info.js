import React from "react";
import Date from "./Date";
export default function Info(props) {
  return (
    <div className='Info'>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <Date date={props.data.date} />
        </li>
        <li className='text-capitalize'>{props.data.description}</li>
      </ul>
      <div className='row'>
        <div className='col-6'>
          <div> Icon</div>
          <div>Temperature in Celsius</div>
        </div>
      </div>
      <div className='col-6'>
        <ul>
          <li>Humidity:{props.data.humidity}% </li>
          <li>Wind:{props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
