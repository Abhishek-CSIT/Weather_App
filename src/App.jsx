<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import LandingPage from "./LandingPage.jsx";
import WeatherDetails from "./WeatherDetails.jsx";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
    if (weatherInfo) {
      setWeatherInfo({
        ...weatherInfo,
        temp: isCelsius
          ? (weatherInfo.temp * 9) / 5 + 32
          : ((weatherInfo.temp - 32) * 5) / 9,
        feelslike: isCelsius
          ? (weatherInfo.feelslike * 9) / 5 + 32
          : ((weatherInfo.feelslike - 32) * 5) / 9,
        unit: isCelsius ? "F" : "C",
      });
    }
  };

  return (
    <div className="app">
      {!weatherInfo ? (
        <LandingPage updateWeatherInfo={setWeatherInfo} isCelsius={isCelsius} />
      ) : (
        <WeatherDetails
          info={weatherInfo}
          toggleUnit={toggleUnit}
          isCelsius={isCelsius}
        />
      )}
    </div>
  );
}

export default App;
=======
import { useState } from "react";
import "./App.css";
import LandingPage from "./LandingPage.jsx";
import WeatherDetails from "./WeatherDetails.jsx";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
    if (weatherInfo) {
      setWeatherInfo({
        ...weatherInfo,
        temp: isCelsius
          ? (weatherInfo.temp * 9) / 5 + 32
          : ((weatherInfo.temp - 32) * 5) / 9,
        feelslike: isCelsius
          ? (weatherInfo.feelslike * 9) / 5 + 32
          : ((weatherInfo.feelslike - 32) * 5) / 9,
        unit: isCelsius ? "F" : "C",
      });
    }
  };

  return (
    <div className="app">
      {!weatherInfo ? (
        <LandingPage updateWeatherInfo={setWeatherInfo} isCelsius={isCelsius} />
      ) : (
        <WeatherDetails
          info={weatherInfo}
          toggleUnit={toggleUnit}
          isCelsius={isCelsius}
        />
      )}
    </div>
  );
}

export default App;
>>>>>>> 93aea7a234f13667092782f6a5b16a3b254753b1
