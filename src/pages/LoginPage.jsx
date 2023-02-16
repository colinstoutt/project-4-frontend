import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const URL = "http://127.0.0.1:8000/login/";

  const login = async (user) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(user),
    });
  };

  function handleChange(e) {
    setForm((prevState) => ({
      // Using ES2015 Computed Property Names
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(form);
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
      // Use something other than an alert in production code
      alert("Incorrect username or password");
    }
  }

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
        <legend>Sign In</legend>
        <label for="email">Username</label>
        <br />
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          name="username"
          onChange={handleChange}
        />
        <br />
        <label for="password">Password</label>
        <br />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />
        <div className="form-controls">
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
