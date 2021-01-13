import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import '../style.css';

export const MultipleCustomHooks = () => {
  const [counter, increment, decrement] = useCounter(1)
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  console.log(data)
  const { quote, author } = !!data && data[0]


  console.log(quote, author)
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr/>

      {
        loading
          ? (
              <div className="alert alert-info text-center">
                loading...
              </div>
          )

          : (
              <blockquote className="blockquote text-end">
                <p>{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
              </blockquote>

          )
      }

    {
      counter > 1 && <button className="btn btn-primary m-3" onClick={ decrement }>Previuos Quote</button>
    }
    <button className="btn btn-primary" onClick={increment}>Next Quote</button>
    </>
  )
}
