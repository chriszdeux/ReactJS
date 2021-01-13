import React from 'react';

export const Small = React.memo(( {value} ) => {
  console.log('I called me againg :(')
  return (
    <small>
      { value }
    </small>
  )
})
