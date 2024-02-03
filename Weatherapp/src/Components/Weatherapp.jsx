import React, { useState, useEffect, useRef, useCallback } from 'react';
import Chart from 'chart.js/auto';
import 'chart.js/auto';
import './Weatherapp.css'

function Weatherapp() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const chartRef = useRef(null);

  const displayChart = useCallback(() => {
    if (weatherData) {
      const weatherChart = document.getElementById('weatherChart').getContext('2d');
      const dates = [];
      const temperatures = [];

      weatherData.list.forEach((weather) => {
        const date = new Date(weather.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });

        dates.push(day);
        temperatures.push(weather.main.temp);
      });

      const uniqueDates = [...new Set(dates)];
      const aggregatedTemperatures = uniqueDates.map((date) => {
        const tempsOnDate = temperatures.filter((temp, index) => dates[index] === date);
        return tempsOnDate.reduce((sum, temp) => sum + temp, 0) / tempsOnDate.length;
      });

      const backgroundColors = ['rgb(231, 45, 45)', 'rgb(50, 203, 50)', 'rgb(50, 50, 214)', 'rgb(210, 210, 21)', 'rgb(6, 195, 195)', 'pink'];

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(weatherChart, {
        type: 'bar',
        data: {
          labels: uniqueDates,
          datasets: [{
            label: 'Temperature (°C) by Day',
            data: aggregatedTemperatures,
            backgroundColor: backgroundColors,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Temperature (°C)'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Day'
              }
            }
          }
        }
      });
    }
  }, [weatherData]);

  useEffect(() => {
    if (weatherData) {
      displayChart();
    }
  }, [weatherData, displayChart]);

  const getWeather = () => {
    const apiKey = 'a22de587ac9c3e8e729cc841778f0a34';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  };

  const displayWeather = () => {
    if (weatherData) {
      return (
        <div className="box">

        <div id="weatherInfo">
          <h2>
            {weatherData.city.name}, {weatherData.city.country}
          </h2>
          <div className="temp">
          <p className='p1'>Temperature: {weatherData.list[0].main.temp} &deg;C</p>

          </div>&nbsp;
          <div className="desc">
          <p className='p2'>Description: {weatherData.list[0].weather[0].description}</p>

          </div><br></br><br></br>
          <div className="hum">
          <p className='p3'>Humidity: {weatherData.list[0].main.humidity}%</p>

          </div>
          <div className="ws">
          <p className='p4'>Wind Speed: {weatherData.list[0].wind.speed} m/s</p>

          </div>
        </div>
        </div>
      );
    }
    return null;
  };

  const printFunction = () => {
    window.print();
  };

  return (
    <>
  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <div className="container">
          <h1 className="app-title">Weather App</h1>
      <input
        type="text"
        id="locationInput"
        placeholder="Enter location"
        className='input-s'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <br></br>
      <button onClick={getWeather}>Get Weather</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={printFunction}>Download</button><br></br>
       
      {displayWeather()}
     
      <canvas id="weatherChart" width="400" height="200"></canvas>
      
    </div>
    </>
  );
}

export default Weatherapp;
