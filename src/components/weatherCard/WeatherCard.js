import React from "react";
import './WeatherCard.css';

export const WeatherCard = ({data})=>{
    return (
            <div className='weather-card'>
                <div className='weather-status'>
                  <div className='status-logo'><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="weather img"/></div>
                  <div className='status-title'>
                    <p>{data.weather[0].main}</p>
                  </div>
                </div>
                <div className='temp-contain'>
                  <h1 className="temp">{Math.round(data.main.temp)} ℃</h1>
                  <p className="min">{Math.round(data.main.temp_min)} ℃</p>
                </div>
                <div className='pvh-container'>
                  <div>
                    <p>{data.main.pressure}</p>
                    <p>pressure</p>
                    </div>
                  <div>
                    <p>{data.visibility}</p>
                    <p>visibility</p>
                  </div>
                  <div>
                    <p>{data.main.humidity}</p>
                    <p>humidity</p>
                  </div>
                </div>
            </div>
            
    );
}