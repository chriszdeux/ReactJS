import React, { useMemo, useState } from 'react';
import { heavyProcess } from '../helpers/memoHeavyProcess';
import { useCounter } from '../hooks/useCounter';
import '../style.css';

export const MemoHook = () => {
  const [show, setShow] = useState(false);
  const [ counter, increment ] = useCounter(1000);

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])
  
  return (
    <>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{ counter }</small></h3>
      <p>{ memoHeavyProcess }</p>
      <hr/>
      <button className="btn btn-primary m-1" onClick={ increment }>+1</button>
      <button 
        className="btn btn-outline-primary m-2"
        onClick={() => {
          setShow(!show)
        }}
      >Show/Hide { JSON.stringify(show) }</button>
    </>
  )
}
