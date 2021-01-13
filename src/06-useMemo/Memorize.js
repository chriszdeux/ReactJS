import React, { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';
import '../style.css';

export const Memorize = () => {
  const [show, setShow] = useState(false);
  const [ counter, increment, decrement, reset ] = useCounter(1)
  return (
    <>
      {
        !show && <div className="animate__animated animate__fadeIn">
                    <h1>Memorize < Small value={ counter } /></h1>
                    <hr/>
                    <button className="btn btn-primary m-1" onClick={ increment }>+1</button>
                    <button className="btn btn-primary m-1" onClick={ reset }>reset</button>
                    <button className="btn btn-primary m-1" onClick={ decrement }>-1</button>
                  </div>
      }
      <button 
        className="btn btn-outline-primary m-2"
        onClick={() => {
          setShow(!show)
        }}
      >Show/Hide { JSON.stringify(show) }</button>
    </>
  )
}
