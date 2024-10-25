import React, { useState } from "react";
import TaskCard from "./TaskCard.tsx";
import './index.css';

export default function TaskBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Send report to Becky', category: 'Work', dueDate: '12/23', completed: false }
  ]);

  // Function to update a task based on its ID
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  // Function to add a new task
  const addNewTask = () => {
    const newTask = {
      id: tasks.length + 1, // Generate new unique ID
      name: 'New Task',
      category: 'Misc',
      dueDate: '12/23',
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="task-board">
      <h2>Today’s Tasks:</h2>

      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdateTask={updateTask} // Pass the update function
        />
      ))}

      {/* Button to add a new task */}
      <button className="btn mt-3" onClick={addNewTask}>
        <i className="bi bi-plus"></i> +
      </button>
    </div>
  );
}

