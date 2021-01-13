import React, { useState } from 'react';

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20
  });

  const { counter1, counter2 } = state 
  return (
    <>
      <h1>CounterApp</h1>
      <h2>Counter 1: { counter1 }</h2>
      <h2>Counter 2: { counter2 }</h2>
      {/* <button onClick={() => setCounter(counter + 1)}>+1</button> */}
      <button onClick={() => {
        setState({
          ...state,
          counter1: counter1 + 1 
        })
      }}>counter 1</button>
      <button onClick={() => {
        setState(state)
      }}>reset</button>
      <button onClick={() => {
        setState({
          ...state,
          counter2: counter2 + 1
        })
      }}>counter 2</button>
      
    </>
  )
}
