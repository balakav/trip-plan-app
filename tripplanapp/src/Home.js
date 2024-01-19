import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon,Grid,Container, Toolbar} from '@mui/material'
import './Home.css'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import HotelIcon from '@mui/icons-material/Hotel';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import {Logout,Settings,PersonAdd, Instagram} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import ContactsSharpIcon from '@mui/icons-material/ContactsSharp';
import PlaceIcon from '@mui/icons-material/Place';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import logo11 from './logo11.jpeg'
import { Autoplay, Navigation } from 'swiper/modules';
import { useSelector, useDispatch } from 'react-redux';
import {logout,selectUser} from './Userslice'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import CancelIcon from '@mui/icons-material/Cancel';
import UpdateIcon from '@mui/icons-material/Update';

<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
    <AppBar className='appbar1' sx={{ bgcolor: "#66FFB2" }}>
        <ol>
            <ul>
           
   <Link to="/Home"><HomeIcon sx={{ fontSize: 35,color:"black",title:'Home'}}className='just'></HomeIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/Hotel"><HotelIcon  sx={{ fontSize:  35 ,color:"black"  }} className='just'></HotelIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/Categery"><CategoryIcon  sx={{ fontSize: 35 ,color:"black" }} className='just'></CategoryIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/Whe"><PlaceIcon sx={{ fontSize: 35,color:"black"  }} className='just'></PlaceIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/Travel"><TimeToLeaveIcon sx={{ fontSize: 35,color:"black"  }} className='just'></TimeToLeaveIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to ="/Feedback">< HelpCenterIcon sx={{ fontSize: 35,color:"black"  }} className='just'></HelpCenterIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <div className='jhk'>
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 ,bgcolor : "black"  }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> {user.name}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <LocalOfferIcon>
            <Settings fontSize="small" />
          </LocalOfferIcon>
          <Link to="/Currentoffer" className="logout1"> &nbsp;&nbsp;&nbsp;Offers</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <BookmarkBorderIcon>
            <Settings fontSize="small" />
          </BookmarkBorderIcon>
          &nbsp;&nbsp;&nbsp;Save
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CancelIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/Cancle" className="logout1"> Cancle</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <UpdateIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/Update" className="logout1">Update</Link>
        </MenuItem>
     <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" color='black' />
          </ListItemIcon>
      
          <Link to="/" className="logout1">Logout</Link> 
        </MenuItem>
      
      </Menu>
      </div>
            </ul> 

        </ol>      
   
    </AppBar><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

   <div className='sc1'>

   <input type='search' placeholder='Search a place' onkeyup="myFunction()" id="myInput" className='search1'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Button variant="contained" className='homebutton1' sx={{ fontSize: 22 ,bgcolor: "#66FFB2",color:"black"}}>Search</Button><br></br><br></br>
   </div>
   <h1>THE FAMOUS PLACES OF THE WORLD</h1>
   {/* <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
  
   <div className='homecard1'>
  <SwiperSlide>

    <Card sx={{ maxWidth: 345}} className="homecard" id="myUL">
      <div>
      <CardMedia
        sx={{ height: 170 }}
       image="https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?cs=srgb&dl=pexels-chait-goli-1796715.jpg&fm=jpg"
        title=" London"
      /></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         London
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The popularization of the name Landon in the United States may be due to the popularity of Michael London, a famous American TV star from 1959 to 1989.  
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      <a href="https://en.wikipedia.org/wiki/London">  <Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  </SwiperSlide>
  <SwiperSlide>

    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg"
        title="Machu Picchu"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Machu Picchu
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned.Its exact former use remains a mystery
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a href="https://en.wikipedia.org/wiki/Machu_Picchu"><Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
    
    
  </SwiperSlide>
    <SwiperSlide>
    
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://cdn.britannica.com/56/122156-050-F5B469C8/overview-complex-Angkor-Wat-Cambodia.jpg"
        title="Angor Wat"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Angkor Wat
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Angkor Wat is a temple complex in Cambodia, located on a site measuring 162.6 hectares. The Guinness World Records considers it as the largest religious structure in the world.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
       <a href="https://en.wikipedia.org/wiki/Angkor_Wat"><Button size="small">Learn More</Button></a> 
      </CardActions>
    </Card>
  </SwiperSlide>
    <SwiperSlide>
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://boraboraphotos.com/wp-content/uploads/2012/12/four-seasons-resort-bora-bora-mt-otemanu.jpg"
        title="bore bore"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Bora Bora
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, It's also a popular luxury resort destination where some guest bungalows are perched over the water on stilts. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a href="https://en.wikipedia.org/wiki/Bora_Bora"><Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  </SwiperSlide>

  <SwiperSlide>

    <Card sx={{ maxWidth: 345 }}className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://w0.peakpx.com/wallpaper/653/454/HD-wallpaper-taj-mahal-india-traveled-the-world-graphy-thumbnail.jpg"
        title="Taj Mahal"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Taj Mahal
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a href="https://en.wikipedia.org/wiki/Taj_Mahal"><Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  </SwiperSlide>
  <SwiperSlide>

    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://grandcanyon.com/wp-content/uploads/2018/08/horseshoe-bend-600x370.jpg"
        title="Grand Canyon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Grand Canyon
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Grand Canyon in Arizona is a natural formation distinguished by layered bands of red rock, revealing millions of years of geological history in cross-section. Vast in scale, the canyon averages 10 miles across and a mile deep along its 277-mile length. Much of the area is a national park, with Colorado River white-water rapids and sweeping vistas.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a href="https://en.wikipedia.org/wiki/Grand_Canyon"><Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  </SwiperSlide>
  <SwiperSlide>
    
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://assets.editorial.aetnd.com/uploads/2009/11/gettyimages-1081719544.jpg"
        title="Colosseum"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Colosseum
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a href="https://en.wikipedia.org/wiki/Colosseum"><Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  </SwiperSlide>
  <SwiperSlide>
    
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/78/c3/88/caption.jpg?w=1200&h=700&s=1&cx=2736&cy=1824&chk=v1_fa65978ad26491920728"
        title=" Eiffel Tower"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Eiffel Tower
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Locally nicknamed "La dame de fer", it was constructed from 1887 to 1889 as the centerpiece of the 1889 World's Fair.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
       <a href="https://en.wikipedia.org/wiki/Eiffel_Tower"> <Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  </SwiperSlide>
  <SwiperSlide>
    
    <Card sx={{ maxWidth: 345 }}className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://greatbarrierreef.org/wp-content/uploads/2022/06/Lady-Musgrave-Island-Great-Barrier-Reef.jpg"
        title=" Great Barrier"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Great Barrier
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Great Barrier Reef is the world's largest coral reef system, composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres over an area of approximately 344,400 square kilometres
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
       <a href="https://en.wikipedia.org/wiki/Great_Barrier"> <Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  </SwiperSlide>
  <SwiperSlide>
    
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://cdn.britannica.com/25/153525-050-FC43840D/Khaznah-Petra-Jordan.jpg"
        title="Petra"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Petra
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom. Accessed via a narrow canyon called Al Siq, it contains tombs and temples carved into pink sandstone cliffs, earning its nickname, the "Rose City."
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
       <a href="https://en.wikipedia.org/wiki/Petra"> <Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  </SwiperSlide>
   </div>
   
      </Swiper>
  <br></br><br></br><br></br><br></br><br></br><br></br>
      <h1>THE FAMOUS TEMPLES OF THE WORLD</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
<SwiperSlide>

    <Card sx={{ maxWidth: 345}} className="homecard" id="myUL">
      <div>
      <CardMedia
        sx={{ height: 170 }}
       image="https://live.staticflickr.com/5478/10693148625_730e6190a3_b.jpg"
        title="Thanjavur temple"
      /></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Brihadisvara Temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Thanjavur temple height is 212 ft towering Shiva temple, which is home to one of the largest Shiva Lingas of the country. A great Nandhi Shrine (sacred bull), carved out of a single rock at 16 ft long & 13 ft high and standing tall at the entrance. This is the second largest Nandhi in India.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      <a href="https://en.wikipedia.org/wiki/Brihadisvara_Temple">  <Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  </SwiperSlide>
  <SwiperSlide>
    
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.tripsavvy.com/thmb/vzVTgJuv8L5RU3iXFaaZ0KYoh5k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-618355052-b865a78b33cf412b915909ad9d941f27.jpg"
        title="Mahabodhi Temple"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Mahabodhi Temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Mahabodhi Temple or the Mahābodhi Mahāvihāra, a UNESCO World Heritage Site, is an ancient, but rebuilt and restored Buddhist temple in Bodh Gaya, Bihar, India, marking the location where the Buddha is said to have attained enlightenment. Bodh Gaya is 15 km from Gaya and is about 96 km from Patna.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
       <a href="https://en.wikipedia.org/wiki/Mahabodhi_Temple"><Button size="small">Learn More</Button></a> 
      </CardActions>
    </Card>
  </SwiperSlide>
  <SwiperSlide>
    
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://upload.wikimedia.org/wikipedia/commons/f/fc/LotusDelhi.jpg"
        title="Lotus Temple"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lotus Temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Lotus Temple, located in New Delhi, India, is a Baháʼí House of Worship that was dedicated in December 1986. Notable for its lotus-like shape, it has become a prominent attraction in the city. Like all Bahá’í Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other qualification.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
       <a href="https://en.wikipedia.org/wiki/Lotus_Temple"> <Button size="small">Learn More</Button></a>
      </CardActions>
     
    </Card>
  </SwiperSlide>
  <SwiperSlide>
    
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://globalcastaway.com/wp-content/uploads/2018/07/the-white-temple-of-chiang-rai-cover.jpg"
        title="Wat Rong Khun"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Wat Rong Khun
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Wat Rong Khun, better known as the White Temple, is a privately owned art exhibit in the style of a Buddhist temple in Pa O Don Chai, Mueang District, Chiang Rai Province, Thailand. It is owned by Chalermchai Kositpipat, who designed, constructed, and opened it to visitors in 1997.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </SwiperSlide>
  <SwiperSlide>
    
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image=""
        title="Jetavanarama"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Jetavanarama
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Jetavanarama stupa or Jetavanaramaya is a stupa, or Buddhist reliquary monument, located in the ruins of Jetavana monastery in the UNESCO world heritage city of Anuradhapura, Sri Lanka. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </SwiperSlide>
  
 
</Swiper>
   <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
   <h1>THE FAMOUS HILLS IN THE WORLD</h1>
   <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
<SwiperSlide>

    <Card sx={{ maxWidth: 345}} className="homecard" id="myUL">
      <div>
      <CardMedia
        sx={{ height: 170 }}
       image="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRVsljbwLr6llcc_FpEMhvFkl-gATAr-t26fliSMoXCNp8957LWIZ2lRchSOM-zxkdk"
        title="Cypress Hills"
      /></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Cypress Hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Cypress Hills are a geographical region of hills in southwestern Saskatchewan and southeastern Alberta, Canada. The hills are part of the Missouri Coteau upland. The highest point in the Cypress Hills is at Head of the Mountain in Alberta at 1,466 m
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      <a href="">  <Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
  </SwiperSlide>
  <SwiperSlide>
    
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT-D_LdJuwntFz12wmuPsufe89Zq3_xyJuCsbLKzXfb40dpxDOGtDYalx1kKsMdaLQO"
        title="Ananthagiri Hills"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ananthagiri Hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Ananthagiri Hills is located in Vikarabad district, Telangana, India. The water flows from these hills to Osman Sagar, also known as Gandipet lake, and Himayathsagar. It is one of the dense forests in Telangana. Ananthagiri Temple is located in this forested area
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
       <a href=""><Button size="small">Learn More</Button></a> 
      </CardActions>
    </Card>
  </SwiperSlide>
  <SwiperSlide>
    
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://upload.wikimedia.org/wikipedia/commons/3/37/Ayodha_Hills.jpg"
        title="Ajodhya Hills"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ajodhya Hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Ajodhya Hills, is a small plateau with hilly surroundings located in the Purulia district of the state West Bengal, India. It is the easternmost part of the Chhotanagpur Plateau and extended part of Eastern Ghats range. Highest peak of Ajodhya Hills is Chamtaburu. The nearby populated town area is Bagmundi
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
       <a href=""> <Button size="small">Learn More</Button></a>
      </CardActions>
     
    </Card>
  </SwiperSlide>
  <SwiperSlide>
    
    <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://upload.wikimedia.org/wikipedia/commons/1/1a/Ezhimala_beach.JPG"
        title="Ezhimala"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ezhimala
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Ezhimala, a hill reaching a height of 286 metres, is located near Payyanur, in Kannur district of Kerala, south India. It is a part of a conspicuous and isolated cluster of hills, forming a promontory, 38 km north of Kannur.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </SwiperSlide>
  
</Swiper><br></br><br></br><br></br><br></br>
   <Box
      sx={{
        width: "100%",
        height:"250px",
        backgroundColor: "#66FFB2",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Trip Planing Application 
            </Typography>
          </Grid>
          <center>

          
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Enjoy | Easy | Happiness`}
            </Typography><br></br><br></br>
            <center>

            <div className="footdiv1">
          <ol>
            <ul>
            <EmailIcon sx={{fontSize:35,cursor:"pointer"}}></EmailIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <PhoneIcon  sx={{fontSize:35,cursor:"pointer"}}></PhoneIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <InstagramIcon  sx={{fontSize:35,cursor:"pointer"}}></InstagramIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FacebookSharpIcon sx={{fontSize:35,cursor:"pointer"}}></FacebookSharpIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ContactsSharpIcon sx={{fontSize:35,cursor:"pointer"}}></ContactsSharpIcon>
            </ul>
          </ol>
          
            </div>
            </center>
            
          </Grid>
          </center>
        </Grid>
      </Container>
    </Box>
    </>
  )
}

export default Home