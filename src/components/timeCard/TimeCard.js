import React, { useEffect, useState } from "react";
import './TimeCard.css';

export const TimeCard = ({data})=>{
  const [time, setTime] = useState('');
  useEffect(()=>{
    setTime(new Date())
  }, [])
  console.log(time)

    return (
<div className='time-card'>
    <div className='time-status'>
      <div className='time-logo'>🕐</div>
      <div className='time-title'>afternoon</div>
    </div>
    <div className='time'>
      <h2>{new Date(data.dt * 1000).toLocaleDateString('en-IN')}</h2>
    </div>
    <div className='riseset-container'>
      <div><span className="sun">☀️</span>{new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</div>
      <div className="moon"><span>🌒</span>{new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</div>
    </div>
</div>
  );
}