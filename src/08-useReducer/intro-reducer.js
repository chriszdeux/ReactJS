const initialState = [{
  id: 1,
  todo: 'buy halo games',
  done: false
}]

const todoReducer = (state = initialState,  action) => {
  if( action?.type === 'add' ) {
    return [...state, action.payload];
  }
  return state;
}

let todos = todoReducer();

const newTodo = {
  id:2,
  todo: 'buy mass effect trilogy games',
  done: false
}

const actionAdd = {
  type: 'add',
  payload: newTodo
}

todos = todoReducer(initialState, actionAdd);
console.log(todos)