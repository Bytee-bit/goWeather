import React from "react";
import './TodayReport.css';

export const TodayReport = ({data})=>{
    return (
        <div className='today-report'>
              <h2>How's the <br/> temprature today</h2>
            <div className='time-span'>
                <div className='morning'>
                  <div id='mor-logo'>☀️</div>
                  <p>max <br/>{Math.round(data.main.temp_max)} ℃</p>
                  <p>morning</p>
                </div>
                <div className='night'>
                  <div id='eve-logo'>🌘</div>
                  <p>min <br/>{Math.round(data.main.temp_min)} ℃</p>
                  <p>evening</p>
                </div>
            </div>
        </div>
    );
}