import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  
  const isMounted = useRef(true)
  
  useEffect(() => {

    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {

    setState({ loading: true, error: null, data: null })
    

    fetch(url)
      .then(response => response.json())
      .then(data => {
        
        
        
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data
            })
          } else {
            console.log('state was not called');
          }
          
      })
  }, [url])

    return state
}
