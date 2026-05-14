import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useReducer, useEffect } from "react";
import TextInput from "./TextInput";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Email validation
  const emailValid = formData.email.includes("@");

  // Form validation
  const isFormValid =
    formData.name &&
    formData.email &&
    formData.password &&
    emailValid;

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);
  };

  // Clear form
  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setSubmittedData(null);
  };

  return (
    <div className="container">
      <h1>Signup Form</h1>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />

        <TextInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        <TextInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        {!emailValid && formData.email && (
          <p className="error">Invalid Email</p>
        )}

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>

        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>

      {/* Preview Panel */}
      {submittedData && (
        <div className="preview">
          <h2>Preview</h2>

          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;
