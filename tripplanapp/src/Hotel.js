import React from 'react'
import './Hotel.css'
import { Button,Rating} from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Hotel() {
  return (
    <>
    <div className='sc1' id='hoteldiv'>
                                                                                          {/* id="hotelsearch" */}
<input type='search' placeholder='Search a place' onkeyup="myFunction()" id="myInput" className='search1'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Button variant="contained" className='homebutton1' sx={{ fontSize: 22 ,bgcolor: "#66FFB2",color:"black"}}>Search</Button><br></br><br></br>
</div><br></br><br></br>
<div className='hotelbooking'>

<Card sx={{ maxWidth:345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://wallpaperaccess.com/full/2690549.jpg"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Venetian
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$1000<br></br>(with swimming pool and cafeteria)<br></br>Central Chennai, Chennai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://w0.peakpx.com/wallpaper/291/722/HD-wallpaper-spa-beach-hotel-polynesia-resort-lit-sea-lights-beach-swimming-luxury-hotel-exotic-islands-ocean-pacific-pool-paradise-spa-island-tropical.jpg"
        title="Spotlight Hotel"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Spotlight Hotel
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$900<br></br>(with swimming pool,cafetria and gameing places)<br></br>Andhra</b> <br></br><Rating name="half-rating" defaultValue={4} precision={0.5} /><br></br>4 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://cdn.wallpapersafari.com/77/30/ejxDH4.jpg"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fountain Fun
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$2000<br></br>(with swimming pool,cafeteria,outing games)<br></br>Kodaikanal</b> <br></br><Rating name="half-rating" defaultValue={3.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://p1.pxfuel.com/preview/508/992/57/maldives-coconut-tree-sea-resort-royalty-free-thumbnail.jpg"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Mississippi Hotel
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$800<br></br>(with swimming pool and cafeteria)<br></br>coimbatore</b> <br></br><Rating name="half-rating" defaultValue={4} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://wallpaperaccess.com/full/2690549.jpg"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Green Tortoise Hostel
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$1000<br></br>(with swimming pool,cafeteria)<br></br>ooty</b> <br></br><Rating name="half-rating" defaultValue={3} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://media.istockphoto.com/id/1021632208/photo/water-villas-in-turquoise-ocean-and-wooden-walkway-leading-to-the-island-with-white-beach-and.jpg?s=612x612&w=0&k=20&c=CbXZmGX_IeDHtD3lfp8OcPxIc4jZJkr6V5-U6GTTcWw="
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Orchard Hotel
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$750<br></br>(with cafeteria)<br></br>Ooty</b> <br></br><Rating name="half-rating" defaultValue={3} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://e1.pxfuel.com/desktop-wallpaper/67/948/desktop-wallpaper-the-view-from-the-hotel-room-hotel-room-thumbnail.jpg"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Spring Brook
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$850<br></br>(with swimming pool and cafeteria)<br></br>Kerala</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://img.freepik.com/free-photo/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck_1258-111483.jpg"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Hotel Agoura
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$1500<br></br>(with swimming pool,cafeteria and boating)<br></br>Kerala</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://cdn1.i-scmp.com/sites/default/files/styles/652x446/public/images/methode/2018/01/30/52f74382-04cf-11e8-82e3-6b95ccc67ee3_image_hires_142307.jpg?itok=SXxEv5zJ&v=1517293388"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Wonder Hill Inn
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$5000<br></br>(with swimming pool and cafeteria)<br></br>Central Chennai, Chennai</b> <br></br><Rating name="half-rating" defaultValue={4} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.luxurylink.com/images/sho_50cf9fe0/11367_10-630/Upper%2BSuite%2BLiving%2BRoom.jpg"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The New Yorker
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$5000<br></br>(with swimming pool and cafeteria)<br></br>Central Chennai, Chennai</b> <br></br><Rating name="half-rating" defaultValue={3.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.fodors.com/wp-content/uploads/2018/10/The-Upper-House_Studio-70-Harbour-View.jpg"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Beachwalk Resort
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$5000<br></br>(with swimming pool and cafeteria)<br></br>Central Chennai, Chennai</b> <br></br><Rating name="half-rating" defaultValue={3.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.fivestaralliance.com/files/fsa/nodes/2013/22790/22790_0_jinganshangrilahotel_fsa-g.jpg?dummy=1386195821"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Etiquette Suites
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$5000<br></br>(with swimming pool and cafeteria)<br></br>Central Chennai, Chennai</b> <br></br><Rating name="half-rating" defaultValue={3.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.classictravel.com/Content/Pictures/Hotels/SG/59568/grand-suite-bedroom.jpg"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Water Vibe Resorts
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$5000<br></br>(with swimming pool and cafeteria)<br></br>Central Chennai, Chennai</b> <br></br><Rating name="half-rating" defaultValue={3.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Consulate Hotel
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$5000<br></br>(with swimming pool and cafeteria)<br></br>Central Chennai, Chennai</b> <br></br><Rating name="half-rating" defaultValue={4} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.classictravel.com/Content/Pictures/Hotels/SG/59568/deluxe-suite-living-area.jpg"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Quaint Motel
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$5000<br></br>(with swimming pool and cafeteria)<br></br>Central Chennai, Chennai</b> <br></br><Rating name="half-rating" defaultValue={4.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://wallpaperaccess.com/full/2690549.jpg"
        title="The Venetian"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Cape Grace
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>$5000<br></br>(with swimming pool and cafeteria)<br></br>Central Chennai, Chennai</b> <br></br><Rating name="half-rating" defaultValue={3.5} precision={0.5} /><br></br>4.5 stars
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Hotelform"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
</div>
    </>
  )
}

export default Hotel