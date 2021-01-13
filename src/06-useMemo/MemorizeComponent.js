import React from 'react';
import { Small } from './Small';
import { useCounter } from '../hooks/useCounter';
export const MemorizeComponent = React.memo ((  ) => {
  
  const [counter, increment] = useCounter(1);
  return (
    <>
      <h1>Memorize < Small value={ counter } /></h1>
      <hr/>
      <button className="btn btn-primary m-1" onClick={ increment }>+1</button>
    </>
  )
})
