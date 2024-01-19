// You can migrate from useState to useReducer in three steps:

// Move from setting state to dispatching actions.
// Write a reducer function.
// Use the reducer from your component.

"use client";
import React, { useReducer } from "react";

const initState = {
  count: 0
};

type Props = {};

type ReducerAction = {
  type: string
};

const reducerFunction = (
  state: { count: number },
  action: ReducerAction
) => {
  if (action.type === "increment") {
    return { ...state, count: state.count + 1 };
  }else{
    return { ...state, count: state.count - 1}
  }
};

const Counter = (props: Props) => {
  const [state, dispatch] = useReducer(reducerFunction, initState);

  const increment = () => {
    dispatch({
      type: "increment",
    });
  };
  const decrement = () => {
    dispatch({
      type: "decrement",
    });
  };

  return (
    <>
      <div>Counter: {state.count}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;


// // pure reducer
// const pureReducer = (state, action) => {
//     switch (action.type) {
//       case 'increment':
//         return { count: state.count + 1 };
//       default:
//         return state;
//     }
//   };

// //   impure
// const impureReducer = (state, action) => {
//     switch (action.type) {
//       case 'increment':
//         // Impure side effect: modifying an external variable
//         externalCounter++;
//         return { count: externalCounter };
//       default:
//         return state;
//     }
//   };
  