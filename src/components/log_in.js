import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Log_in({setUser}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  //Redirect to sign up page
  function handleClick() {
    navigate("/signup");
  }
  function handleSubmit(e) {
    e.preventDefault();
    //make an api call to login user
    fetch("http://localhost:9292/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data);
        if (data.message === "SUCCESS"){
          navigate("/tasks")
          setUser(data.data)
        }
        else{
          setErrors(<li className="li" >{data.data.message}</li>)
        }
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
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} action="post">
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Iddahawuor@yahoo.com... "
          required
        />

        <label for="password">Password</label>
        <input
          type="Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        <input type="submit" value="Log in" />
      </form>
      <ul>
        {errors}
      </ul>
      <hr />
      <div class="signup">
        <p>Don't have an account?</p>
        <button className="btn" onClick={handleClick}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Log_in;