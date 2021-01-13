import React, { useRef } from 'react';
import '../style.css';
export const FocusScreen = () => {

  const focusInput = useRef();
  const handleFocusScreen = ( e ) => {
    // document.querySelector('input').select();
    // document.querySelector('input').focus();
    focusInput.current.select();
    
  }
  return (
    <>
      <h1>FocusScreen</h1>
      <hr/>
      <input 
        type="text"
        className="form-control mb-3"
        placeholder="name"
        ref={ focusInput }
      />

      <button className="btn btn-outline-primary" onClick={ handleFocusScreen }>Focus</button>
    </>
  )
}
