"use client"
import React from 'react';

interface CounterProps{}

const CounterVariableComponent: React.FC<CounterProps> = () =>{
  // Normal variable
  let counter = 1;
  const incrementCounter = () => {
    counter += 1;
    console.log(`Counter value: ${counter}`);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default CounterVariableComponent;
