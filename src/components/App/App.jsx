import React, { useState } from 'react';
import Info from '../Main/Info';
import Weather from '../Main/Weather';
import Form from '../Main/Form';

function App() {
  const API_KEY = 'ce1b7a2d3b68f39b0da0722d23affce7';

  const [state, setState] = useState({
    temp: undefined,
    temp_max: undefined,
    temp_min: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: null,
  });

  const weather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      const data = await api_url.json();

      console.log(data);

      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date =
        date.getMonth() + ':' + date.getMinutes() + ':' + date.getSeconds();

      setState({
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: null,
      });
    } else {
      setState({
        temp: undefined,
        temp_max: undefined,
        temp_min: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: 'Введите название города',
      });
    }
  };

  return (
    <div className="app">
      <div className="wrapper">
        <div className="info">
          <Info />
        </div>
        <div className="wrapWeather">
          <Form weather={weather} />
          <Weather state={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
