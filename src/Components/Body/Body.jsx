import { React, useState} from 'react'
import './Body.scss'
import Lottie from 'react-lottie';
import animationData from './../../assets/123.json';
import loadingData from './../../assets/loading2.json'
const Body = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const API_KEY = '67d97b30265200cf5bb1ad37a31915e1';
    const fetchWeatherData = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error('City not found. Please try again.');
            }

            const data = await response.json();
            setWeatherData(data);
            setError('');
        } catch (error) {
            setWeatherData(null);
            setError(error.message);
        }
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: loadingData,
    };
    return (
    <div>
          <div className='container2'>
              <div className="left">
                  <div className="upper">
                      <div className="inputdiv">
                          <label className='enter'>
                              Enter Location :
                              <input className='input'
                                  type="text"
                                  value={city}
                                  onChange={(e) => setCity(e.target.value)}
                              />
                          </label>
                      </div>
                  </div>
                  <div className="buttondiv">
                      <button className="button" onClick={fetchWeatherData}>Get Weather</button>
                  </div>

                    {error ? (
                        <div className="error-message">{error}<Lottie options={defaultOptions2} height={200} width={200} /></div>
                    ) : (
                        // Render your data or loading indicator
                        <div className="data-container">{}</div>
                    )}

                  {weatherData && (
                      <div className='data'>
                          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                          <p>Temperature: {weatherData.main.temp} &#8451;</p>
                          <p>Weather: {weatherData.weather[0].description}</p>
                      </div>
                  )}
              </div>
              <div className="right">
                    <div className="your-component">
                        <Lottie options={defaultOptions} height={400} width={400} />
                    </div>
              </div>
          </div>
    </div>
  )
}

export default Body
