import React from 'react';

export const ShowIncrement = React.memo(( { increment } ) => {
  console.log('I called againg')
  return (
    <>
      <button 
        className="btn btn-outline-primary"
        onClick={() => {
          increment(5)
      }}>+1</button>
    </>
  )
})
