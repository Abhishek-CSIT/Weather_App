import { useState } from "react";
import "./SearchBox.css";
export default function SearchBox({ updateWeatherInfo, isCelsius }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5023d70fd56398e7376708aa904d30e4";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=${
          isCelsius ? "metric" : "imperial"
        }`
      );
      const jsonResponse = await response.json();
      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        feelslike: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        Weather: jsonResponse.weather[0].description,
        unit: isCelsius ? "C" : "F",
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      updateWeatherInfo(newInfo);

      // Save to local storage
      const recentSearches =
        JSON.parse(localStorage.getItem("recentSearches")) || [];
      if (!recentSearches.includes(city)) {
        recentSearches.unshift(city);
        localStorage.setItem(
          "recentSearches",
          JSON.stringify(recentSearches.slice(0, 5))
        );
      }

      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-box">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        required
      />
      <button type="submit">Search</button>
      {error && <p className="error">City not found!</p>}
    </form>
  );
}
