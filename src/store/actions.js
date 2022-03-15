import * as constants from "./constants"

export const setTodoInput = (payload) => {
  return {
    type: constants.SET_TODO_INPUT,
    payload
  }
}

export const addTodo = (payload) => {
  return {
    type: constants.ADD_TODO,
    payload
  }
}