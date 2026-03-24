import { useState } from "react";
import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp(){
    const [info , setInfo] = useState({
        city:"Kanpur",
        feelsLike: 26.22,
        humidity: 24,
        temp: 27.02,
        tempMax: 27.02,
        tempMin: 27.02,
        weather: "clear sky",
    })

    let updateInfo = (result)=>{
      setInfo(result);
    }
    return (<div>
        
        <SearchBox weatherInfo = {updateInfo}></SearchBox>
        <InfoBox info={info}/>
    </div>);
}