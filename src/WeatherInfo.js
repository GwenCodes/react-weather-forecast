import react from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{weatherData.city}</h1>
      <ul className="weather-details">
        <li>
          <FormattedDate date={weatherData.date} />
        </li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row mt-1">
        <div className="col-6">
          <div className="weather-main d-flex align-items-center">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="weather-icon"
            />
            <div className="temperature-display">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="weather-details">
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
