import {
  ACTION_SET_TASK, 
  ACTION_ADD_TASK, 
  ACTION_DELETE_TASK } from "./constants"

export const initialState = {
  task: "",
  listTask: []
};

const reducers = (state, actions) => {
  switch(actions.type) {
    case ACTION_SET_TASK:
      return { ...state, task: actions.payload }
    case ACTION_ADD_TASK:
      return {
        ...state,
        listTask: [...state.listTask, actions.payload]
      }
    case ACTION_DELETE_TASK:
      const newTask = [...state.listTask];
      newTask.splice(actions.index, 1);
      return {
        ...state,
        listTask: newTask
      }
    default:
      throw new Error("Invalid action")
  }
}

export default reducers