import { useEffect, useState } from "react";
import "./LandingPage.css";
import SearchBox from "./SearchBox";

export default function LandingPage({ updateWeatherInfo, isCelsius }) {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const savedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(savedSearches);
  }, []);

  const handleRecentSearch = (city) => {
    updateWeatherInfo(city);
  };

  return (
    <div className="landing-page">
      <div className="content-container">
        <h1>Welcome to the Weather App</h1>
        <p>
          Created by <strong>Abhishek with &#x2665;</strong>
        </p>
        <SearchBox
          updateWeatherInfo={updateWeatherInfo}
          isCelsius={isCelsius}
        />
        {recentSearches.length > 0 && (
          <div className="recent-searches">
            <h3>Recent Searches</h3>
            <ul>
              {recentSearches.map((city, index) => (
                <li key={index} onClick={() => handleRecentSearch(city)}>
                  {city}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
