import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setTasks(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      window.location.href = "/login";
    }
  }, []);

  function handleAdd(task) {
    setTasks([...tasks, task]);
  }

  function handleDelete(task) {
    const token = localStorage.getItem("token");
    axios
      .delete(`/api/tasks/${task.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const updatedTasks = tasks.filter((t) => t.id !== task.id);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAdd={handleAdd} />
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;