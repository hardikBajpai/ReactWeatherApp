import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){


    const INIT_URL = "https://images.unsplash.com/photo-1691848746401-b40fdd5d823f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return (
        <div className="info">
            <h1>Weather Info</h1>
            <div className="info-box">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >= 80 ? RAINY_URL : info.temp>20 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <div>Temperature = {info.temp}&deg;C</div><br></br>
          <div>Feels Like = {info.feelsLike}&deg;C</div><br></br>
          <div>Maximum Temperature = {info.tempMax}&deg;C</div><br></br>
          <div>Minimum Temperature = {info.tempMin}&deg;C</div><br></br>
          <div>Humidity = {info.humidity}</div><br></br>
          <div>weather = {info.weather}</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}