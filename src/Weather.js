import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
              autoComplete="off"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 mt-2"
            />
          </div>
        </div>
      </form>
      <h1>Paris</h1>
      <ul className="weather-details">
        <li>Day and time</li>
        <li>Weather conditions</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/clear_night_light.svg"
              alt="clear evening"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">65</span>
              <span className="units">°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="weather-details">
            <li>Precipitation: 0%</li>
            <li>Humidity: 62%</li>
            <li>Wind: 5mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
