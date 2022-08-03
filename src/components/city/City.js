import React from "react";
import './City.css';

export const City = ()=>{
    return (
        <div className='city-container'>
            <div className='city-name'>
              <h2>Delhi</h2>
              <p>IN</p>
            </div>
            <div className='longlati-info'>
              <div>longitude</div>
              <div>latitude</div>
            </div>
            <div className='cloudwind-info'>
              <div>cloud</div>
              <div>wind</div>
            </div>
        </div>
    );
}