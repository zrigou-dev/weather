import React from 'react'
import './Weather.css'
import icon from '../../images/icon-1.png'
import NextWeather from '../NextWeather/NextWeather';

const Weather = ({city , weatherData}) => {
//     const date = new Date();
//     console.log(date);
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const dayOfWeek = days[date.getDay()];
// console.log(dayOfWeek);
    const date = new Date(weatherData.list[0].dt_txt)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = days[date.getDay()];
  return (
    <div className="container">
        <div className="information">
            <img src={require(`../../images/${weatherData.list[0].weather[0].icon}.svg`)} alt="icon-weather" />
            <div>
                <h3>Today</h3>
                <h2>{city}</h2>
                <p>Temperature : { Math.round(weatherData.list[0].main.temp - 273.15)} °C</p>
                <p>{weatherData.list[0].weather[0].description}</p>
            </div>
        </div>
        <div className="NextWeather">
          <NextWeather weatherData={weatherData} />
        </div>
    </div>
  )
}

export default Weather

// const date = new Date(2022, 0, 1);
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const dayOfWeek = days[date.getDay()];
// console.log(dayOfWeek);
