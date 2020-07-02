import React, { useState } from 'react';
import Die from './Die';

const RollDice = () => {
  const sides = ['one', 'two', 'three', 'four', 'five', 'six'];

  const [die, setDie] = useState({ die1: null, die2: null });

  const roll = () => {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    setDie({ die1: newDie1, die2: newDie2 });
  };

  return (
    <div>
      <Die face={die.die1} />
      <Die face={die.die2} />
      <button onClick={roll}>Roll It</button>
    </div>
  );
};

export default RollDice;
