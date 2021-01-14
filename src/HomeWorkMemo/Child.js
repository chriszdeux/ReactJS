import React from 'react'

export const Child = React.memo(( {number, increment} ) => {
  console.log('I called againg')
  return (
    <>
      <button className="btn btn-primary m-2" onClick={() => increment(number)}>{ number }</button>
    </>
  )
})
