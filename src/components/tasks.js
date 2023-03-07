import React, { useState } from "react";
import Taskdetails from "./taskdetails";
import TaskForm from "./TaskForm";

function Task({ tasks, setTasks }) {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [category, setCategory] = useState("all");

  function handleClick() {
    setShowTaskForm(!showTaskForm);
  }

  function handleChange(event) {
    setCategory(event.target.value);
    console.log(category);
  }

  //set tasks based on completion status selected
  const tasksToDisplay = tasks.filter(
      (task) => category === "all" || `${task.completion_status}` === category
    );

  return (
    <><h3 className="heading">TASK MANAGER</h3>
      <button className="button" onClick={handleClick}>
        Create New Task
      </button>
      {showTaskForm ? <TaskForm tasks={tasks} setTasks={setTasks} /> : null}
      <div className="filter">
        <label for="completion status">Filter by completion status:</label>
        <select
          id="completion_status"
          name="completion_status"
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="false">Incomplete</option>
          <option value="true">Complete</option>
        </select>
      </div>
      <div>
        {tasksToDisplay.map((task) => {
          return (
            <Taskdetails
              title={task.title}
              description={task.description}
              due_date={task.due_date}
              completion_status={task.completion_status}
              key={task.id}
            />
          );
        })}
      </div>
    </>
  );
}
export default Task;