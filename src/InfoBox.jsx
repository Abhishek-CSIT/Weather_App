import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CloudOffIcon from '@mui/icons-material/CloudOff';






export default function InfoBox({ info }){
    const IMG_URL ="https://images.unsplash.com/photo-1617141869037-a0db4d26b6af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL ="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
     const COLD_URL ="https://images.unsplash.com/photo-1477468572316-36979010099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D"
     const RAIN_URL ="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"


    return(
        <div className="InfoBox"> 
        <div className='Cardc'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="Weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {
          info.humidity > 80 ? <BeachAccessIcon/> : info.temp > 15 ? <Brightness5Icon/> : <AcUnitTwoToneIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        
                    <p> Temprature = {info.temp}&deg;C, </p>
                   <p> Humidity = {info.humidity}&deg;C</p>
                   <p> Max-Temp = {info.tempMax}&deg;C</p>
                   <p> Min-Temp = {info.tempMin}&deg;C</p>
                   <p> Weather can be described as <b>{info.Weather}</b> and Feels-like = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
         </div>
    );
}