import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../style.css';

export const RealExampleRef = () => {
  
  const [show, setShow] = useState(false);

  const ShowElement = () => {
    setShow(!show);
  }
  return (
    <>
      <h1>RealExampleRef</h1>
      <hr/>
      {
        show && <MultipleCustomHooks />
      }

      <button className="btn btn-outline-primary mt-5" onClick={ ShowElement }>Show/Hide</button>
    </>
  )
}
