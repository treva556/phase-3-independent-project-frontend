import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TaskForm({tasks, setTasks}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: "",
    completion_status: false,
  });
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:9393/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks([...tasks, data]);
      });
  }
  //handle formdata change
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="new-task">
      <form onSubmit={handleSubmit} action="post">
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="title.."
        />
        <label for="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="description..."
        />
        <label for="due_date">Due date (yyyy-mm-dd) :</label>
        <input
          type="text"
          id="due_date"
          name="due_date"
          value={formData.due_date}
          onChange={handleChange}
          placeholder="due date..."
        />
        <label for="completion status">Completed ?</label>
        <select id="completion_status" name="completion_status" onChange={handleChange}>
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default TaskForm;