import React from "react";
import './Forecast.css';

export const Forecast = ({data}) =>{
  console.log(data)
    return (
    <div className='weather-prediction'>
        <h2>Weather Forecast</h2>
        {/* card */}
        {
          data.list.slice(1, 5).map(forecast => (
            <div className='prediction-card'>
                <div>
                    <div className='predec-logo'><img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="weather img"/></div>
                    <div className='predec-weather'>
                      <p>{new Date(forecast.dt*1000).toLocaleDateString('en-IN')}</p>
                      <p>{forecast.weather[0].main}</p>
                    </div>
                    <div className='predec-temp'>
                      <p>{Math.round(forecast.main.temp_max)}℃ / {Math.round(forecast.main.temp_min)}℃</p>
                    </div>
                </div>
            </div>
          ))
        }

    </div>
    );
}