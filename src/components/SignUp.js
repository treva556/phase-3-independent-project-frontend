import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp({setUser}) {
  const [SignData, setSignData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SignData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "SUCCESS"){
          setUser(data.data)
          navigate("/tasks");
      }
      else{
        setErrors(<li className="li" >{data.data.error}</li>)
      }
      });
  }
  function handleChange(e) {
    setSignData({
      ...SignData,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="Signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={SignData.email}
          onChange={handleChange}
          placeholder="Iddahawuor@yahoo.com.."
          required
        />

        <label for="password">Password</label>
        <input
          type="Password"
          id="password"
          name="password"
          value={SignData.password}
          onChange={handleChange}
          placeholder="Password.."
          required
        />

        <input type="submit" value="Sign Up" />
      </form>
      <ul>
        {errors}
      </ul>
      <hr />
      <div class="signup">
        <p>Already a user?</p>
        <button className="btn" onClick={handleClick}>
          Log in
        </button>
      </div>
    </div>
  );
}

export default SignUp;