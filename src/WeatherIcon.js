import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);

  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };
  const colorMapping = {
    CLEAR_DAY: "#f39c12",
    CLEAR_NIGHT: "#2c3e50",
    PARTLY_CLOUDY_DAY: "#f1c40f",
    PARTLY_CLOUDY_NIGHT: "#34495e",
    CLOUDY: "#95a5a6",
    RAIN: "#3498db",
    SNOW: "#ecf0f1",
    FOG: "#bdc3c7",
  };
  const iconCode = codeMapping[props.code];
  const iconColor = colorMapping[iconCode] || "black";

  return (
    <ReactAnimatedWeather
      icon={iconCode}
      color={iconColor}
      size={props.size}
      animate={true}
    />
  );
}
