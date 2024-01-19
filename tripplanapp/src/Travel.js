import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './Travel.css'
import { Link } from 'react-router-dom';
export default function Travel() {
  return (
   <>
   <h1>CHOOSE YOUR TRAVEL FILED</h1>
 <div className='trvelbox'>

    <Card sx={{ maxWidth: 345}} className="homecard" id="myUL">
      <div>
      <CardMedia
        sx={{ height: 170 }}
       image="https://wallpaperaccess.com/full/1628626.jpg"
        title="Bus"
      /></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Bus
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Budget 1,000 above  
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/Bus'><Button size="small">Cilck here</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345}} className="homecard" id="myUL">
      <div>
      <CardMedia
        sx={{ height: 170 }}
       image="https://img.freepik.com/free-photo/steam-train-chugs-through-mountain-forest-scene-generative-ai_188544-8072.jpg?w=2000"
        title="Train"
      /></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Train
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Budget 900 above  
        </Typography>
      </CardContent>
      <CardActions>
      <Link to='Train'> <Button size="small">Cilck here</Button></Link>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345}} className="homecard" id="myUL">
      <div>
      <CardMedia
        sx={{ height: 170 }}
       image="https://wallpaperaccess.com/full/1264507.jpg"
        title="Flight"
      /></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Flight
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Budget 10,000 above  
        </Typography>
      </CardContent>
      <CardActions>
      <Link to='Flight'> <Button size="small">Cilck here</Button></Link>
      </CardActions>
    </Card>
 </div>
   </>
  )
}
