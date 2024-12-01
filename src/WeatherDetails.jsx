import { Sun, Cloud, CloudRain, CloudSnow, Zap, Droplet, CloudFog } from "lucide-react";
import "./WeatherDetails.css";

export default function WeatherDetails({ info, toggleUnit }) {

  const weatherIcons = {
    Clear: <Sun size={50} color="#FFA500" />,
    Clouds: <Cloud size={50} color="#A9A9A9" />,
    Rain: <CloudRain size={50} color="#4682B4" />,
    Snow: <CloudSnow size={50} color="#ADD8E6" />,
    Thunderstorm: <Zap size={50} color="#FFD700" />,
    Drizzle: <Droplet size={50} color="#00CED1" />,
    Fog: <CloudFog size={50} color="#708090" />,
  };

  const weatherIcon =
    weatherIcons[info.Weather] ||
    (info.temp < 0 ? <CloudSnow size={50} color="#ADD8E6" /> : <Sun size={50} color="#FFA500" />);

  return (
    <div className="weather-details">
      <div className="content-container">
        <h2>Weather in {info.city}</h2>
        <button onClick={toggleUnit} className="toggle-button">
          Switch to {info.unit === "C" ? "Fahrenheit" : "Celsius"}
        </button>
        <div className="weather-info">
          <div className="weather-icon">{weatherIcon}</div>
          <p>
            <strong>Temperature:</strong> {info.temp.toFixed(2)}&deg;{info.unit}
          </p>
          <p>
            <strong>Feels Like:</strong> {info.feelslike.toFixed(2)}&deg;{info.unit}
          </p>
          <p>
            <strong>Humidity:</strong> {info.humidity}%
          </p>
          <p>
            <strong>Condition:</strong> {info.Weather}
          </p>
        </div>
      </div>
    </div>
  );
}
