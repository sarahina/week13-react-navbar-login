import "./Login.css";

import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="auth-form-container">
      <h1><i className="fa-solid fa-unlock"></i>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="password"
          name="password"
        />
        <button type="submit">LOG IN</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("signup")}>
        Don't have an account? Sign up here
      </button>
    </div>
  );
}

export default Login;
