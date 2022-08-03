import React from "react";
import './TodayReport.css';

export const TodayReport = ()=>{
    return (
        <div className='today-report'>
              <h2>How's the <br/> temprature today</h2>
            <div className='time-span'>
                <div className='morning'>
                  <div id='temp-logo'></div>
                  <p>20 c</p>
                  <p>morning</p>
                </div>
            </div>
        </div>
    );
}