import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './Whe.css'
const Whe = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData(city);
  };

  const fetchWeatherData = (city) => {
    const apiKey = 'a22de587ac9c3e8e729cc841778f0a34';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setWeatherData(null);
      });
  };

  return (
   <>
    <div className="whe">
   <center>

    <h1>CHECK WEATHER WHERE YOU WANT GO !!!</h1>
   </center><br></br><br></br>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          className='wsearch1'
          onChange={handleInputChange}
          placeholder="Enter city name"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <img src="https://i.pinimg.com/1200x/32/19/b5/3219b5bacd3c712241660b5465785e8c.jpg"></img> */}
        <button type="submit" className='wbutton'>Search</button>
      </form>

      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
   </>
   
  );
};

export default Whe;
