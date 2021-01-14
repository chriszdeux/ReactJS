import React, { useCallback, useState } from 'react';
import { Child } from './Child';

import '../style.css';

export const Father = ( ) => {
  const numbers = [2,4,6,8,10];
  const [value, setValue] = useState(0);

  // const increment = ( num ) => {
  //   setValue(value + num);
  // }

  const increment = useCallback(( num ) => {
    setValue( v => v + num )
  }, [ setValue ])

  const reset = () => {
    setValue(0)
  }
  return (
    <>
      <h1>HomeWorkMemo { value }</h1>
      <hr/>
      {
        numbers.map(number => 
        <Child 
          key={number}
          number={number}
          increment={increment}  
        />
        
        )
      }
      <button className="btn btn-outline-primary" onClick={ reset }>reset</button>
    </>
  )
}
