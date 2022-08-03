import React from "react";
import './WeatherCard.css';

export const WeatherCard = ()=>{
    return (
            <div className='weather-card'>
                <div className='weather-status'>
                  <div className='status-logo'></div>
                  <div className='status-title'>Cloudy</div>
                </div>
                <div className='temp'>
                  <h1>22 c</h1>
                  <p>11 c</p>
                </div>
                <div className='pvh-container'>
                  <div>pressure</div>
                  <div>visibility</div>
                  <div>humidity</div>
                </div>
            </div>
    );
}