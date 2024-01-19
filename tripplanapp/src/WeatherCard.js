// WeatherCard.js
import React from 'react';
import './Wc.css'
const WeatherCard = ({ weatherData }) => {
  const { name, main, weather } = weatherData;

  return (
    <>
    <center>
  
    <div className="wc">
      <h1>{name}</h1>
      <h3 className='placeclor'>Temperature: {main.temp}°C</h3>
      <h3 className='placeclor'>Weather: {weather[0].description}</h3>
    </div>
    </center>
    </>
  );
};

export default WeatherCard;
