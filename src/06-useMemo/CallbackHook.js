import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../style.css';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1);
  // }

  const increment = useCallback(( num ) => {
    setCounter(counter => counter + num)
  }, [ setCounter ])
  debugger
  return (
    <>
      <h1>useCallbackHook { counter }</h1>
      <hr/>
      <ShowIncrement increment={ increment } />
    </>
  )
}
