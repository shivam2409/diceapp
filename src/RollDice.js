import React, { useState } from 'react';
import Die from './Die';

const RollDice = () => {
  const sides = ['one', 'two', 'three', 'four', 'five', 'six'];

  const [die, setDie] = useState({ die1: 'one', die2: 'two', rolling: false });

  const roll = () => {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    setDie({ die1: newDie1, die2: newDie2, rolling: true });

    //wait one second and timeout

    setTimeout(() => {
      setDie({ ...die, rolling: false });
    }, 1000);
  };

  return (
    <div className='main'>
      <div className='container'>
        <Die face={die.die1} />
        <Die face={die.die2} />
      </div>
      <button onClick={roll} disabled={die.rolling}>
        {die.rolling ? 'Rolling..' : 'Roll Dice'}
      </button>
    </div>
  );
};

export default RollDice;
