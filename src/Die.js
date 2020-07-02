import React from 'react';
import './App.css';

const Die = (props) => {
  return (
    <div>
      <i className={`Die fas fa-dice-${props.face}`}></i>
    </div>
  );
};

export default Die;
