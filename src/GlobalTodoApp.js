import { useStore, actions } from "./store";

function GlobalTodoApp() {
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state;

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));
  }
  return (
    <div>
      <h1>Global Todo</h1>
      <input 
        value={todoInput}
        onChange={(e) => {dispatch(actions.setTodoInput(e.target.value))}}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
      {todos.length > 0 && todos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default GlobalTodoApp;