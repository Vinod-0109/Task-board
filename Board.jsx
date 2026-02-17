import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import ActivityLogs from "./ActivityLogs";

const EMPTY_BOARD = {
  todo: [],
  doing: [],
  done: []
};

export default function Board() {
  const [board, setBoard] = useState(EMPTY_BOARD);

  useEffect(() => {
    const saved = localStorage.getItem("board");
    if (saved) setBoard(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);

  const addTask = (task) => {
    setBoard({ ...board, todo: [...board.todo, task] });
    log("Task created");
  };

  const log = (msg) => {
    const logs = JSON.parse(localStorage.getItem("logs") || "[]");
    logs.unshift({ msg, time: new Date().toLocaleString() });
    localStorage.setItem("logs", JSON.stringify(logs));
  };

  const resetBoard = () => {
    if (confirm("Reset all tasks?")) {
      localStorage.removeItem("board");
      setBoard(EMPTY_BOARD);
    }
  };

  return (
    <div>
      <h2>Task Board</h2>
      <TaskForm addTask={addTask} />
      <button onClick={resetBoard}>Reset Board</button>

      <div className="board">
        {["todo", "doing", "done"].map((col) => (
          <div key={col} className="column">
            <h3>{col.toUpperCase()}</h3>
            {board[col].map((task) => (
              <div key={task.id} className="task">
                <b>{task.title}</b>
                <p>{task.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <ActivityLog />
    </div>
  );
}
