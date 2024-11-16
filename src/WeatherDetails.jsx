import "./WeatherDetails.css";

export default function WeatherDetails({ info, toggleUnit }) {
  return (
    <div className="weather-details">
      <div className="content-container">
        <h2>Weather in {info.city}</h2>
        <button onClick={toggleUnit} className="toggle-button">
          Switch to {info.unit === "C" ? "Fahrenheit" : "Celsius"}
        </button>
        <div className="weather-info">
          <p>
            <strong>Temperature:</strong> {info.temp.toFixed(2)}&deg;{info.unit}
          </p>
          <p>
            <strong>Feels Like:</strong> {info.feelslike.toFixed(2)}&deg;
            {info.unit}
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
