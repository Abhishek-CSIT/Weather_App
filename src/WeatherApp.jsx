import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatheApp(){
    let [Weatherinfo , SetWeatherInfo] = useState({
        city : "Dubai",
        Weather
: 
"clear sky",
feelslike
: 
44.54,
humidity
: 
47,
temp
: 
37.54,
tempMax
: 
37.96,
tempMin
: 
36.1,
    });

    let UpdateInfo = (newInfo) => {
        SetWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Abhishek </h2>
            <SearchBox UpdateInfo={UpdateInfo}/>
            <InfoBox info={Weatherinfo}/>
        </div>
    );
}