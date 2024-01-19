import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip } from 'swiper/modules';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './Categery.css'
export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);


  return (
    <>
    <div className='cat'>

    <div className='bodyc'>

    <h1>Covai One day Trip Planing </h1>
      <Swiper
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
      >
     
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/one-day-trip-from-coimbatore.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Isha Yoga Maiyam
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹300  with food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://miro.medium.com/v2/resize:fit:1358/1*CtEuSSaXX1eqwhHQovdq4A.jpeg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ukkadam lake
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500+ with boating</b>
        </Typography>
      </CardContent>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b7/55/15/near-water-falling-location.jpg?w=1200&h=-1&s=1"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        kodiveri falls
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://2.bp.blogspot.com/-M_R3DPfmNUU/VgY13Mr8oPI/AAAAAAAAI5U/CgiU_VBrRXc/s1600/3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Bhavaisagar dam 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500 + fish food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://1.bp.blogspot.com/-wqSPTQFrrs0/V5ROwtlymNI/AAAAAAAAArk/JJMQLnR1eycsQQvJLIYdaJxUHBJ7OaHGACLcB/s640/Azhiyar%2BDam.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Aazhiyar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://static.sadhguru.org/d/46272/1626099393-velliangiri-mountains-3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        velingigiri hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1365643d1430302211-gedee-car-museum-coimbatore-gedeecarmuseum.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gedee car musium
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://ramanan50.files.wordpress.com/2018/07/perur_patteeswarar1.jpg?w=800"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Perur temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.sterlingholidays.com/resorts/galleryslider/anaikatti-bythesiruvani/sterling-anaikatti-new-rdest1.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Anaikatti
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://i.pinimg.com/originals/16/25/03/16250375cda9120cd6cab3e1b38cf01d.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        valparai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Onedaytripplan"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>

      </Swiper>
    <br></br><br></br>
















    <h1>Madurai One day Trip Planing </h1>
      <Swiper
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
      >
     
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.auchitya.com/wp-content/uploads/2020/02/Azhagar.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Azhagar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹300  with food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/meenakshi-amman-temple-1656170467_cfebe78d69f069f881aa.webp"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       meenakshi Amman Temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://myholidayhappiness.com/uploads/b1cd19a07edb58e0ba755cd6952e283a.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Thirumalai nayak mahal, Madurai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Gandhi_museum%2C_Madurai.jpg/640px-Gandhi_museum%2C_Madurai.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gandhi Memorial Museum
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500 + fish food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2017/02/20191537/Meghamalai3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Meghamalai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://static.sadhguru.org/d/46272/1626099393-velliangiri-mountains-3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        velingigiri hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1365643d1430302211-gedee-car-museum-coimbatore-gedeecarmuseum.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gedee car musium
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://ramanan50.files.wordpress.com/2018/07/perur_patteeswarar1.jpg?w=800"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Perur temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.sterlingholidays.com/resorts/galleryslider/anaikatti-bythesiruvani/sterling-anaikatti-new-rdest1.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Anaikatti
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://i.pinimg.com/originals/16/25/03/16250375cda9120cd6cab3e1b38cf01d.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        valparai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Maduraionedaytrip"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>

      </Swiper>
    <br></br><br></br>
    












    <h1>Kanniyakumai One day Trip Planing</h1>
      <Swiper
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
      >
     
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://kanyakumaritourism.in/images/places-to-visit/headers/vivekananda-rock-memorial-kanyakumari-tourism-entry-fee-timings-holidays-reviews-header.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Vivekananda Rock Memorial
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹300  with food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
       
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/6f/71/f4/padmanabhapuram-palace.jpg?w=1200&h=-1&s=1"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Padmanabhapuram 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.holidify.com/images/cmsuploads/compressed/Thirparappu_water_falls(75)_20180122170244.JPG"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Tirparappu Waterfalls
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500 + fish food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://kanyakumaritourism.in/images//tourist-places/sunset-point-kanyakumari/sunset-point-kanyakumari-tourism-location-address.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Sunset Point, Kanyakumari
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://kanyakumaritourism.in/images/places-to-visit/headers/vattakottai-fort-kanyakumari-tourism-entry-fee-timings-holidays-reviews-header.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Vattakottai Fort
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://kanyakumaritourism.in/images/places-to-visit/headers/mahatma-gandhi-memorial-mandapam-kanyakumari-tourism-entry-fee-timings-holidays-reviews-header.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Mahatma Gandhi Mandapam
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.templepurohit.com/wp-content/uploads/2017/01/Thanumalayan-Temple-Suchindram.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Suchindram Shree Thanumalayan Swamy Temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://pbs.twimg.com/media/ElVeIZpVgAA_zfi.jpg:large"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        lemur beach 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        // image="https://www.tamilnadutourism.tn.gov.in/img/pages/mobile/thiruvalluvar-statue-1655196527_2721709b722e6b33f5c0.webp"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Thiruvalluvar Statue
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500+ with boating</b>
        </Typography>
      </CardContent>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://kanyakumaritourism.in/images/places-to-visit/headers/muttom-beach-kanyakumari-tourism-entry-fee-timings-holidays-reviews-header.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Muttam
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Kanniyakumarione"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>

      </Swiper>
    <br></br><br></br>
    











    <h1>Chennai One day Trip Planing</h1>
      <Swiper
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
      >
     
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://media.istockphoto.com/id/1253972619/photo/vast-marina-beach-in-india.jpg?s=612x612&w=0&k=20&c=JWjD6FmiUk_CxLuL5dM6an9eNRTxUBDoMiWSozFqFeI="
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Marina Beach
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹300  with food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://media.istockphoto.com/id/579221042/photo/fantastic-art-design-of-monolithic-famous-shore-temple.jpg?s=612x612&w=0&k=20&c=8YqXhGxvIKIcb5OFeWvfcmBMTDPbuhFSHQA3ZHX-5f0="
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Mahabalipuram
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500+ with boating</b>
        </Typography>
      </CardContent>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.reviewofreligions.org/wp-content/uploads/2022/11/shutterstock_1219753852.jpeg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Santhome Cathedral Basilica
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://chennaitourism.travel/images/places-to-visit/headers/parthasarathy-temple-triplicane-chennai-tourism-entry-fee-timings-holidays-reviews-header.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Arulmigu Sri Parthasarathy Perumal Temple Tiruvallikeni
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500 + food</b>
        </Typography>
      </CardContent>S
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://1.bp.blogspot.com/-wqSPTQFrrs0/V5ROwtlymNI/AAAAAAAAArk/JJMQLnR1eycsQQvJLIYdaJxUHBJ7OaHGACLcB/s640/Azhiyar%2BDam.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Aazhiyar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://static.sadhguru.org/d/46272/1626099393-velliangiri-mountains-3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        velingigiri hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1365643d1430302211-gedee-car-museum-coimbatore-gedeecarmuseum.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gedee car musium
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://ramanan50.files.wordpress.com/2018/07/perur_patteeswarar1.jpg?w=800"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Perur temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.sterlingholidays.com/resorts/galleryslider/anaikatti-bythesiruvani/sterling-anaikatti-new-rdest1.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Anaikatti
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://i.pinimg.com/originals/16/25/03/16250375cda9120cd6cab3e1b38cf01d.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        valparai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Chennaiondaytrip"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>

      </Swiper>
    <br></br><br></br>
    











    <h1> Education Trip Planing </h1>
      <Swiper
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
      >
     
       
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://chennaitourism.travel/images/places-to-visit/headers/chennai-government-museum-tourism-entry-fee-timings-holidays-reviews-header.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Government Museum Chennai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Gandhi_museum%2C_Madurai.jpg/640px-Gandhi_museum%2C_Madurai.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gandhi Memorial Museum
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://i.ytimg.com/vi/O1zc8ht-LXI/maxresdefault.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        DakshinaChitra Heritage Museum
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.dsctirunelveli.org.in/images/banner.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        District Science Centre, Tirunelveli
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://blog.railmitra.com/wp-content/uploads/2022/02/Major-Attractions-of-National-Rail-Museum-1.webp"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Rail museum toy train station
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day<br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://1.bp.blogspot.com/-LXyE5hW1N_c/X_orfPaOr5I/AAAAAAAAkwE/Cp3xdZM27Z8vkxRxG4Mnes_IWGcZIgfowCLcBGAsYHQ/w1200-h630-p-k-no-nu/Bhushavali_My_Travelogue_GD_Naidu_Museum_Coimbatore%2B%25281%2529.JPG"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        GD Science Museum
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Educationtrip"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>

      </Swiper>
    <br></br><br></br>
    











    <h1>Family Trip Planing</h1>
      <Swiper
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
      >
     
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.outlookindia.com/traveller/wp-content/uploads/2017/05/tamil1_Yelagiri_FI.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Yelagiri
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day <br></br><b>₹300  with food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://shravyanaveenblogs.in/wp-content/uploads/2021/08/vgp-1-637045358402663473.jpeg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        VGP Universal Kingdom
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day stay <br></br><b>₹500+ with boating</b>
        </Typography>
      </CardContent>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.makemytrip.com/travel-guide/media/dg_image/ooty/Doddabetta-Peak-Prince-Roy-wikimedia-commons.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Doddabetta Peak
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day stay <br></br><b>₹500</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://t3.ftcdn.net/jpg/01/69/40/76/360_F_169407681_XbcWU19XwS3lrAhjLdy2NPB8xy76k1Y7.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Kodaikanal
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day <br></br><b>₹500 + fish food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b290eSUyQyUyMGluZGlhfGVufDB8fDB8fHww&w=1000&q=80"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      Ooty
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
       
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://t3.ftcdn.net/jpg/04/83/99/42/360_F_483994277_swklfyWmGq7cT6PzspdrQOWbFIrxYVFV.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Thanjai Periya Kovil
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Familytrip"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>
      </Swiper>
    <br></br><br></br>











    <h1>Children Trip Planing </h1>
      <Swiper
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
      >
     
       
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://1.bp.blogspot.com/-wqSPTQFrrs0/V5ROwtlymNI/AAAAAAAAArk/JJMQLnR1eycsQQvJLIYdaJxUHBJ7OaHGACLcB/s640/Azhiyar%2BDam.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Aazhiyar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://static.sadhguru.org/d/46272/1626099393-velliangiri-mountains-3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        velingigiri hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1365643d1430302211-gedee-car-museum-coimbatore-gedeecarmuseum.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gedee car musium
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://ramanan50.files.wordpress.com/2018/07/perur_patteeswarar1.jpg?w=800"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Perur temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.sterlingholidays.com/resorts/galleryslider/anaikatti-bythesiruvani/sterling-anaikatti-new-rdest1.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Anaikatti
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://i.pinimg.com/originals/16/25/03/16250375cda9120cd6cab3e1b38cf01d.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        valparai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Childrentrip"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>
      </Swiper>
    <br></br><br></br>
    </div>
    </div>
     
    </>
  );
}