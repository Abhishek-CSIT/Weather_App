import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({ UpdateInfo }){
    let [city , SetCity] = useState("");
    let [Error , SetError] = useState(false);

    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "5023d70fd56398e7376708aa904d30e4";

 
    let GetWeatherInfo = async () => {
        try{ let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            Weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    } catch (err) {
       throw err;
    }

    };
       

    let handleEvent =  (evt) =>{
        SetCity(evt.target.value);
    };

    let handelSubmit = async (evt) => {
        try {
            evt.preventDefault();
            SetCity("");
           let newInfo = await GetWeatherInfo();
           UpdateInfo(newInfo);
        } catch (err) {
            SetError(true);
        }
       
    };

    return(
        <div className="searchBox">
        <form onSubmit={handelSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleEvent}/>
        <br></br> <br></br>
        <Button variant="contained" type='submit'>Search</Button>
        {Error && <p style={{color : "red"}}> NO SUCH PLACE EXISTS!</p>}
        </form>
        </div>
    );
}