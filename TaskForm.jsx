import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    if (!title) return alert("Title is required");

    addTask({
      id: Date.now(),
      title,
      description,
      priority: "Medium",
      createdAt: new Date().toISOString()
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <input placeholder="Task title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={submit}>Add Task</button>
    </div>
  );
}
