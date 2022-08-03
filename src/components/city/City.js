import React from "react";
import './City.css';

export const City = ({data})=>{
    return (
        <div className='city-container'>
            <div className='city-name'>
              <h2>{data.name}</h2>
              <p>{data.sys.country}</p>
            </div>
            <div className='longlati-info'>
              <div>
                <p>long {data.coord.lon}</p>
              </div>
              <div>
                <p>lati {data.coord.lat} </p>
              </div>
            </div>
            <div className='cloudwind-info'>
              <div>☁️  {data.clouds.all}</div>
              <div>💨  {data.wind.speed} km/h</div>
            </div>
        </div>
    );
}