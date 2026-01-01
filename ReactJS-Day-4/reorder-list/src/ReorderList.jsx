import { useState } from "react";
import "./index.css";

const initialTasks = [
  { id: "1", text: "Task One" },
  { id: "2", text: "Task Two" },
  { id: "3", text: "Task Three" }
];

export default function ReorderList() {
  const [tasks, setTasks] = useState(initialTasks);

  const moveUp = (index) => {
    if (index === 0) return;
    const updated = [...tasks];
    [updated[index - 1], updated[index]] =
      [updated[index], updated[index - 1]];
    setTasks(updated);
  };

  const moveDown = (index) => {
    if (index === tasks.length - 1) return;
    const updated = [...tasks];
    [updated[index], updated[index + 1]] =
      [updated[index + 1], updated[index]];
    setTasks(updated);
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Reorder Tasks</h2>

        <ul>
          {tasks.map((task, index) => (
            <li key={task.id} className="task">
              <span>
                <strong>{index + 1}.</strong> {task.text}
              </span>

              <div className="btns">
                <button onClick={() => moveUp(index)} disabled={index === 0}>
                  ↑
                </button>
                <button
                  onClick={() => moveDown(index)}
                  disabled={index === tasks.length - 1}
                >
                  ↓
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
