"use client"
import React, { useState } from 'react';

interface CounterProps {
}

const CounterStateComponent: React.FC<CounterProps> = ( ) => {
  // State variable
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
    console.log(`Counter value: ${counter}`);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default CounterStateComponent;
