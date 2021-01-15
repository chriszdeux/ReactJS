
export const todoReducer = (state = [], action) => {
  switch ( action.type ) {
    case 'add':
      // debugger
      return [...state, action.payload];
    
    case 'delete':
      // debugger
      return state.filter(todo => todo.id !== action.payload)
  
    default:
      return state
  }
}