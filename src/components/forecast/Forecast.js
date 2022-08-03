import React from "react";
import './Forecast.css';

export const Forecast = () =>{
    return (
    <div className='weather-prediction'>
        <h2>Weather Forecast</h2>
        {/* card */}
        <div className='prediction-card'>
            <div>
                <div className='predec-logo'></div>
                <div className='predec-weather'>
                  <p>november 11</p>
                  <p>cloudy</p>
                </div>
                <div className='predec-temp'>
                  <p>max / min</p>
                  <p>22 / 15</p>
                </div>
            </div>
        </div>
    </div>
    );
}