import './App.css';
import { SearchTerm } from '../components/searchTerm/SearchTerm';
import {WeatherCard} from '../components/weatherCard/WeatherCard'
import { TimeCard } from '../components/timeCard/TimeCard';
import { TodayReport } from '../components/todayReport/TodayReport';
import { City } from '../components/city/City';
import { Forecast } from '../components/forecast/Forecast';
import { client } from '../api/client';
import { useEffect, useState } from 'react';
const key = "294ad08460228f58617e171de3b04294"; 

function App() {
  const [city, setCity] = useState('delhi');        //by default delhi will be rendered
  const [weather, setWeather] = useState(null);     // storong state for weather and forecast
  const [forecast, setForecast] = useState(null);

  // this handler pass to the SearchTerm compo. to setCity
  const setCityHandler = (newCity)=>{
    setCity(newCity);
  }
  // Async work at react lifecycle method render if city get changed
  useEffect(()=>{
    const data = async ()=>{
      const weather = await client.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
      const forecast = await client.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${key}&units=metric`);
      setWeather(weather);
      setForecast(forecast);
      return [weather, forecast];
    }
    data()
  }, [city])
  
  return (
    <>
    <div className='app'>
      <div className='app-content'>
        {/* left side */}
        <div className='left-side'>
          {/* header */}
          <header className='header'>
            <h1 className='logo'>goWeather</h1>
            <SearchTerm setCity = {setCityHandler}/>
          </header>
          {/* main */}
          <main className='main'>
            <div className='weather-report'>
              {/* Checks if weather is undefind in case initial rendering */}
              {weather && <WeatherCard data={weather}/>}   
              {weather&& <TimeCard data={weather}/>}
            </div>
              {weather&& <TodayReport data={weather}/>}
          </main>
        </div>
        {/* Right side of page */}
        <div className='right-side'>
          {weather&& <City data={weather}/>}
          {forecast && <Forecast data={forecast}/>}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
