import { useState } from "react";
import "./index.css";

const initialTodos = [
  { id: "1", text: "Complete React project", priority: "High", completed: false },
  { id: "2", text: "Review PRs", priority: "Medium", completed: true },
  { id: "3", text: "Update documentation", priority: "Low", completed: false }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        text,
        priority,
        completed: false
      }
    ]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="page">
      <div className="todo-box">
        <h2>Todo List</h2>

        <div className="controls">
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter todo"
          />

          <select value={priority} onChange={e => setPriority(e.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <button onClick={addTodo}>Add</button>
        </div>

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span
                onClick={() => toggleTodo(todo.id)}
                className={todo.completed ? "done" : ""}
              >
                {todo.text}
              </span>

              <span className={`badge ${todo.priority.toLowerCase()}`}>
                {todo.priority}
              </span>

              <button
                className="delete"
                onClick={() => deleteTodo(todo.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
