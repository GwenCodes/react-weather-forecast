import react from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="temperature-display">
      <span className="temperature">{Math.round(props.data.temperature)}</span>
      <span className="units">°C</span>
    </div>
  );
}
