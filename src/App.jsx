import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex justify-center space-x-6 bg-gray-200 p-4">
        <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        <Link to="/login" className="text-green-600 hover:underline">Login</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
