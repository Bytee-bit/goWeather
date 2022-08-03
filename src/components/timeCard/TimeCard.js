import React from "react";
import './TimeCard.css';

export const TimeCard = ()=>{
    return (
<div className='time-card'>
    <div className='time-status'>
      <div className='time-logo'></div>
      <div className='time-title'>afternoon</div>
    </div>
    <div className='time'>
      <h1>05:20</h1>
      <p>sunday</p>
    </div>
    <div className='riseset-container'>
      <div>sunrise</div>
      <div>sunset</div>
    </div>
</div>
  );
}