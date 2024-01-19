"use client"
import React, { useState } from 'react';

interface CounterProps {
}

const StateUpdated: React.FC<CounterProps> = ( ) => {
  // State variable
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
    setCounter(counter + 2)
    console.log(`Counter value: ${counter}`);


    // setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
    // setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
    // setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
    // You may have noticed that setState(5) actually works like setState(n => 5), but n is unused!

  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default StateUpdated;

// Batching Logic 

// export function getFinalState(baseState, queue) {
//   let finalState = baseState;

//   for (let update of queue) {
//     if (typeof update === 'function') {
//       // Apply the updater function.
//       finalState += 1;
//     } else {
//       // Replace the next state.
//       finalState = update;
//     }
//   }

//   return finalState;
// }


//Closure
// const [counter, setCounter] = useState(0);

// const incrementCounter = () => {
//   setCounter((prevCounter) => {
//     // The inner function captures 'prevCounter' in a closure
//     console.log(`Counter value: ${prevCounter}`);
//     return prevCounter + 1;
//   });
// };

// When 'incrementCounter' is called, it refers to the 'prevCounter' from the closure
