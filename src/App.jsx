import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import UserHomePage from "./HomePage"; // Assuming you only need UserHomePage
import CoursesPage from "./CoursesPage"; // Import CoursesPage

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); // Set to true after login
  };

  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route
          path="/"
          element={<LoginPage onLogin={handleLogin} />}
        />

        {/* User Home route */}
        <Route
          path="/user"
          element={isAuthenticated ? <UserHomePage /> : <Navigate to="/" />}
        />

        {/* Courses Page route */}
        <Route
          path="/courses"
          element={isAuthenticated ? <CoursesPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
