import "./Signup.css";


import React, { useState } from "react";
function Signup(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
       
    }

    return (
        <div className="auth-form-container">
          <h1><i className="fa-solid fa-user-plus"></i>Sign Up</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="First and Last Name"
            />
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Confirm Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
            <button type="submit">SIGN UP</button>
          </form>
          <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
            Already have an account?
            <br></br>Login here.
          </button>
        </div>
      );
    }
    
    export default Signup;
    