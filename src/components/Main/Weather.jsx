import React from 'react';

function Weather({ state }) {
  return (
    <div className="wrapperText">
      {state.city && (
        <div>
          <p>
            Местоположение: {state.city}, {state.country}
          </p>
          <p>Температура: {state.temp.toFixed(1) + '°c'} </p>
          <p>Максимальная температура: {state.temp_max.toFixed(1) + '°c'}</p>
          <p>Минимальная температура: {state.temp_min.toFixed(1) + '°c'}</p>
          <p>Давление: {state.pressure}</p>
          <p>Заход солнца: {state.sunset}</p>
        </div>
      )}
      <p className="error">{state.error}</p>
    </div>
  );
}

export default Weather;
