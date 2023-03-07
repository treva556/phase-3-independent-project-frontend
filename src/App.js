import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("/api/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Task Manager
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tasks" className="nav-link">
                  Tasks
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/tasks">
            <h1>Tasks</h1>
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
              ))}
            </ul>
          </Route>
        
      </div>
    </Router>
  );
}

export default App;