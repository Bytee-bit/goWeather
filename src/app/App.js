import './App.css';
import { SearchTerm } from '../features/searchTerm/SearchTerm';
import {WeatherCard} from '../components/weatherCard/WeatherCard'
import { TimeCard } from '../components/timeCard/TimeCard';
import { TodayReport } from '../components/todayReport/TodayReport';
import { City } from '../components/city/City';
import { Forecast } from '../components/forecast/Forecast';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherData} from '../features/searchTerm/searchTermSlice';

function App() {
  const [city, setCity] = useState('delhi');
  
  const data = useSelector(state => state.weatherData)
  console.log(data);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchWeatherData())
  }, [])


  return (
    <>
    <div className='app'>
      <div className='app-content'>
        <div className='left-side'>
          <header className='header'>
            <h1 className='logo'>sunmoon</h1>
            <SearchTerm/>
          </header>
          <main className='main'>
            <div className='weather-report'>
              <WeatherCard/>
              <TimeCard />
            </div>
            <TodayReport/>
          </main>
        </div>
        {/* Right side of page */}
        <div className='right-side'>
          <City />
          <Forecast/>
        </div>
      </div>

      {/* <div>footer</div> */}

    </div>
    </>
  );
}

export default App;
