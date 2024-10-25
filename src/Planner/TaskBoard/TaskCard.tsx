import React, { useState } from 'react';
import './TaskCard.css'

function TaskCard({ task, onUpdateTask }) {
  const [name, setName] = useState(task.name);
  const [category, setCategory] = useState(task.category);
  const [dueDate, setDueDate] = useState(task.dueDate);

  // Function to handle updating the task in the parent component
  const handleUpdate = () => {
    onUpdateTask({ ...task, name, category, dueDate });
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="mb-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleUpdate} // Update when the input loses focus
            className="form-control"
          />
        </div>

        <div className="row-fields">
          <div className="field mb-2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              onBlur={handleUpdate}
              className="form-select"
            >
              <option value="">Select Category</option>
              <option value="Work">Work</option>
              <option value="Fitness">Fitness</option>
              <option value="Personal">Personal</option>
              <option value="Misc">Misc</option>
            </select>
          </div>

          <div className="field mb-2">
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              onBlur={handleUpdate}
              className="form-control"
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default TaskCard;



