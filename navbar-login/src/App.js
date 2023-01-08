import React, { useState } from "react";
import './App.css';
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Navbar from "./components/navigation/Navbar";


function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <Navbar />

      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Signup onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;