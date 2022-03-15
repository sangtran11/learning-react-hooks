
import { setTask,  addTask, deleteTask } from "./actions"
import reducers, { initialState } from "./reducers"
import logger from "./logger";
import { useReducer, useRef } from "react";

function TodoApp() {
  const [state, dispatch] = useReducer(logger(reducers), initialState)
  const { task, listTask } = state;
  const inputRef = useRef()

  const handleAddTask = () => {
    dispatch(addTask(task))
    dispatch(setTask(""))
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>Todo</h1>
      <input
        ref={inputRef}
        value={task} 
        placeholder="Enter todo ..." 
        onChange={(e) => dispatch(setTask(e.target.value))}/>
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {listTask.map((item, index) => {
          return <li key={index}>
            {item}
            <span onClick={() => dispatch(deleteTask(index))}>&times;</span>
          </li>
        })}
      </ul> 
    </div>
  );
}

export default TodoApp;
