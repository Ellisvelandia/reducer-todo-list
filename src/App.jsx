import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

function App() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <>
      <div className="card-to-do">
        <h1>Task List</h1>
        <div className="counter-todos">
          <h3>
            N Tasks: <span>{todosCount}</span>
          </h3>
          <h3>
            pending Tasks: <span>{pendingTodosCount}</span>
          </h3>
        </div>
        <div className="add-todo">
          <h3>Add Tasks</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
    </>
  );
}

export default App;
