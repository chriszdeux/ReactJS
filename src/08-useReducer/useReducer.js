
export const reducer = ({ count }, action) => {
  // const { count } = state
  switch( action.type ) {
    case 'increment':
      return { count: count + 1 };
    
    case 'decrement':
      return {count: count - 1};
      
    default:
      throw new Error()
  }

  // return state
}