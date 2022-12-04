import React from 'react'
import './styles/App.scss'
import { useState,useEffect}from 'react'
import WeatherCard from './WeatherCard'
import Weather from '../util/Types'
import { getWeatherUrl, apiKey } from '../util/Constants';
import Spinner from './common/Spinner'
import Error from './common/Error'

const WeatherInfo: React.FC = () => {
   const [searchValue,setSearchValue] = useState('London');
   const [weatherDetails, setWeatherDetails] = useState<Array<Weather>>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   var [hasError, setHasError] = useState(false);

    const getWeatherInfo = async () => {
        setIsLoading(true);
        try {
            const data = await fetch(`${getWeatherUrl}?q=${searchValue}&APPID=${apiKey}`, {
                method: 'GET',
            }).then((response) => {
                return response.json();
            });
            /* to be changes to setWeatherDetails(data)*/
            console.log(data);
            const{ temp, temp_max, temp_min } = data.main
            const { main } = data.weather[0]
            const { name, id } = data
            const { speed } = data.wind
            const{ country, sunset } = data.sys
 
            const myNewWeatherInfo= {
              id,
              temp, temp_max, temp_min,
              main,
              name,
              speed,
              country, sunset
 
            };
            setWeatherDetails([myNewWeatherInfo, myNewWeatherInfo, myNewWeatherInfo]);
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            setHasError(true);
        }
    };
  
    useEffect(() => {
        getWeatherInfo();
   }, [])

    return (
        <div className="container">
             <div>
                <>
                    <i className="fa fa-map" aria-hidden="true"></i> <h1>Weather prediction for latest 3 days</h1>
                </>
            </div>
            <div className="button-wrapper">
                <div className='search'>
                    <input type="search"
                    placeholder='City name...'
                    autoFocus
                    id='search'
                    className='searchTerm'
                    value={searchValue}
                    onChange={(e)=>setSearchValue(e.target.value)}
                    />
                
                    <button className='searchButton'
                    type="button"
                    onClick={getWeatherInfo} >Search</button>
                </div>          
            </div>
            {isLoading ? (
                <Spinner />
            ) : hasError ? (
                <Error />
            ) : (
                <>
                <div className="user-list">
                    {weatherDetails &&
                    weatherDetails.map((weatherInfo: Weather) => {
                        return <WeatherCard key={weatherInfo.id} weather={weatherInfo}/>;
                    })}
                </div>
                </>
            )}
        </div>
        
    )
}

export default WeatherInfo;