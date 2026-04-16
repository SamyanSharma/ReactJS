import React, { useState } from 'react';

export default function TaskTracker() {
  const [task, setTask] = useState({ title: "Learn React", completed: false });

  const toggleStatus = () => {
    setTask(prevTask => ({ ...prevTask, completed: !prevTask.completed }));
  };

  return (
    <div>
      <h3>{task.title} - {task.completed ? "Completed" : "Pending"}</h3>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
}