import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({
    x:0,
    y:0
  })

  const { x, y } = coords;

  
  useEffect(() => {

    const mouseMove = (e) => {
      const coords = {x: e.x, y: e.y}
      setCoords(coords)
    }


    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, [])
  return (
    <div>
      <h1>You are awesome :)</h1>
      <p>
        Coord X: { x } Coord Y: { y }
      </p>
    </div>
  )
}
