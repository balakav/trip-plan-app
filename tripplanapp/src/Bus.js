import React from 'react'
import './Hotel.css'
import { Button,Rating} from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Bus.css'
function Hotel() {
  return (
    <>
    <div className='sc1' id='hoteldiv'>

<input type='search' placeholder='From : chennai' onkeyup="myFunction()" id="myInput" className='search1' id="hotelsearch"></input><br></br><br></br>
<input type='search' placeholder='To : covai' onkeyup="myFunction()" id="myInput" className='search1' id="hotelsearch"></input>&nbsp;&nbsp;&nbsp;
<Button variant="contained" className='homebutton1' sx={{ fontSize: 22 ,bgcolor: "#66FFB2",color:"black"}}>Search</Button><br></br><br></br><br></br><br></br>
</div><br></br><br></br>
<div className='busbooking'>

<Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.nicepng.com/png/full/829-8298777_com-have-been-into-the-service-of-luxury.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Sabari Tavels
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>₹1000<br></br>(with AC and Non-Ac)<br></br>chennai-covai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Busform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.pngall.com/wp-content/uploads/5/Tourist-Bus-PNG-HD-Image.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        SPS Tavels
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>₹800<br></br>(with AC and Non-Ac) sleeper(2+1)<br></br>chennai-covai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Busform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.pngitem.com/pimgs/m/248-2488389_sri-kaleswari-brothers-bus-hd-png-download.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        JB Tavels
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>₹1,270<br></br>Mercedes Benz Multi-Axle A/C<br></br>chennai-covai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Busform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://gumlet.assettype.com/pratidintime/import/2021/12/Arunachal-Pradesh-bus.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Vetri Tavels
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>₹655<br></br>(with AC and Non-Ac)<br></br>chennai-covai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Busform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzfGVufDB8fDB8fHww&w=1000&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Chakra Tavels
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>₹768<br></br>(with AC and Non-Ac)<br></br>chennai-covai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Busform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.pngitem.com/pimgs/m/123-1232643_transparent-bus-png-luxury-bus-for-download-png.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Shri Aanjaneya Travel
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>₹879<br></br>(with AC and Non-Ac)<br></br>chennai-covai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Busform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://d1hv7ee95zft1i.cloudfront.net/custom/truck-model-photo/original/61074092e7477.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Raman Tavels
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>₹1,270<br></br>(with AC and Non-Ac)<br></br>chennai-covai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Busform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://cdn.xxl.thumbs.canstockphoto.com/white-tour-bus-isolated-stock-image_csp1812446.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Krishna Tavels
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>₹1,000<br></br>(with AC and Non-Ac)<br></br>chennai-covai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Busform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://cms.eichertrucksandbuses.com/uploads/truck/sub-category/7a6cb7743deb9e419f473a567511ef1e.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        ASP Tavels
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>₹1500<br></br>(with AC and Non-Ac)<br></br>chennai-covai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Busform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.pngkey.com/png/full/251-2513689_luxury-buses-luxury-bus-hd-png.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Kannan Tavels
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>₹1000<br></br>(with AC and Non-Ac)<br></br>chennai-covai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Busform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.eichertrucksandbuses.com/front/images/buses_img01.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Arthi Tavels
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>₹700<br></br>(with AC and Non-Ac)<br></br>chennai-covai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Busform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://t4.ftcdn.net/jpg/02/69/47/51/360_F_269475198_k41qahrZ1j4RK1sarncMiFHpcmE2qllQ.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Ambika Tavels
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>₹850<br></br>(with AC and Non-Ac)<br></br>chennai-covai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Busform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
   
</div>
    </>
  )
}

export default Hotel