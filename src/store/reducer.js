import * as constants from "./constants"

const initialState = {
  todos: [],
  todoInput: ""
}

function reducer(state, actions) {
  switch(actions.type) {
    case constants.SET_TODO_INPUT: 
      return {
        ...state,
        todoInput: actions.payload
      }
    case constants.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, actions.payload]
      }
    default:
      throw new Error("Invalid actions")
  }
}

export { initialState }
export default reducer