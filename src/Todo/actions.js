import {
  ACTION_SET_TASK, 
  ACTION_ADD_TASK, 
  ACTION_DELETE_TASK } from "./constants"

export const setTask = (payload) => {
  return {
    type: ACTION_SET_TASK,
    payload
  }
}

export const addTask = (payload) => {
  return {
    type: ACTION_ADD_TASK,
    payload
  }
}

export const deleteTask = (index) => {
  return {
    type: ACTION_DELETE_TASK,
    index
  }
}