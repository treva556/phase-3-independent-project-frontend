import React from "react";

function TaskItem({ task, onDelete }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <button className="btn btn-danger" onClick={() => onDelete(task)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;