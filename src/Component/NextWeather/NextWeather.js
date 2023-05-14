import React from 'react'
import './NextWeather.css'

const NextWeather = ({weatherData}) => {
    console.log(weatherData.list[8]);
    // const allNext = [weatherData.list[8] , weatherData.list[16] , weatherData.list[24] , weatherData.list[32]]
    const date1 = new Date(weatherData.list[8].dt_txt)
    const date2 = new Date(weatherData.list[16].dt_txt)
    const date3 = new Date(weatherData.list[24].dt_txt)
    const date4 = new Date(weatherData.list[32].dt_txt)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const Next1 = days[date1.getDay()];
    const Next2 = days[date2.getDay()];
    const Next3 = days[date3.getDay()];
    const Next4 = days[date4.getDay()];
  return (
    <div className="container">
       <div className="row">
        <div className="col-md-3 next-info">
           <h3>{Next1}</h3>
           <img src={require(`../../images/${weatherData.list[8].weather[0].icon}.svg`)} alt="icon-weather" />
           <p>{ Math.round(weatherData.list[8].main.temp - 273.15)} °C </p>
        </div>
        <div className="col-md-3 next-info">
           <h3>{Next2}</h3>
           <img src={require(`../../images/${weatherData.list[16].weather[0].icon}.svg`)} alt="icon-weather" />
           <p>{ Math.round(weatherData.list[16].main.temp - 273.15)} °C </p>
        </div>
        <div className="col-md-3 next-info">
           <h3>{Next3}</h3>
           <img src={require(`../../images/${weatherData.list[24].weather[0].icon}.svg`)} alt="icon-weather" />
           <p>{ Math.round(weatherData.list[24].main.temp - 273.15)} °C </p>
        </div>
        <div className="col-md-3 next-info">
           <h3>{Next4}</h3>
           <img src={require(`../../images/${weatherData.list[32].weather[0].icon}.svg`)} alt="icon-weather" />
           <p>{ Math.round(weatherData.list[32].main.temp - 273.15)} °C </p>
        </div>
       </div>
    </div>
  )
}

export default NextWeather
