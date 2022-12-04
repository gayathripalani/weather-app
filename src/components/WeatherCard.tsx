import React, { useEffect,useState } from 'react'
import Weather from '../util/Types';
import './styles/WeatherCard.scss';

interface IWeatherCardrops {
    weather: Weather;
  }

const WeatherCard  = ({ weather }: IWeatherCardrops) => {
    console.log(weather);
    return (
        <div className='weather-card'>
           <div className='content'>
                <div className='title'>
                    <i className="fa fa-thermometer-three-quarters" aria-hidden="true"> Temperature</i> 
                </div>
                <div className='description'>
                    <p>Max: {weather.temp_max} °C</p>
                    <p>Min: {weather.temp_min} °C</p>
                    {weather.main == 'Rain' && <><i className="fa fa-umbrella" aria-hidden="true"></i> <span>Carry umbrella</span></>}
                    {weather.main == 'Clear' && <><i className="fa fa-sun-o" aria-hidden="true"></i> <span>Carry umbrella/ Use sunscreen lotion</span></>}
                    {weather.main == 'Storm' && <><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> <span>Don’t step out! A Storm is brewing!</span></>}
                    {weather.speed > '5' && <><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> <span>It’s too windy, watch out!</span></>}
                </div>
            </div>                   
        </div>
    )
}



export default WeatherCard;