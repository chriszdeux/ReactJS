import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const [state, increment, decrement, reset] = useCounter(10)
  return (
    <>
      <h1>Counter { state }</h1>
      <button onClick={ () => increment(2) }>+ 1</button>
      <button onClick={ reset }>reset</button>
      <button onClick={ () => decrement(2) }>- 1</button>
    </>
  )
}
