import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users", {
        username,
        password,
      });
      setMessage("✅ User saved successfully!");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Error saving user");
    }
  };

  return (
    <div className="container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && (
        <p className={message.startsWith("✅") ? "success-message" : "error-message"}>
          {message}
        </p>
      )}
    </div>
  );
}

export default App;
