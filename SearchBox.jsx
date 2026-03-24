import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBow.css"
import { useState } from 'react';

export default function SearchBox({weatherInfo}){
    let [city , setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7077f1a81182f575ba1e9b580615d4ba";

    let getWeatherInfo = async()=>{
       let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);

       let result = {
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,


       }
       console.log(result);
       return result;
    }

    let handleOnChange = (event)=>{
        setCity(event.target.value);
    }

    let handleOnSubmit = async (event)=>{
        event.preventDefault();
        setCity("");
       let newInfo = await getWeatherInfo();
       weatherInfo(newInfo);
     
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleOnSubmit}>
        
           <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleOnChange}/>

           <br></br>
           <br></br>
           <Button variant="contained" type="submit"  >
        Send
      </Button>
      </form>
        </div>
    );
}