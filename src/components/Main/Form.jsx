import React from 'react';

function Form({ weather }) {
  return (
    <div className="wrapForm">
      <form onSubmit={weather}>
        <input type="text" name="city" placeholder="Город (En)" />
        <button>Получить погоду</button>
      </form>
    </div>
  );
}

export default Form;
