import React from "react";
import { FaUser, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CoursesPage.css";

const CoursesPage = () => {
  // Dummy data for courses and resources
  const courses = [
    { name: "Java", resource: "Java Programming Essentials - Resource Link" },
    { name: "C", resource: "C Programming Guide - Resource Link" },
    { name: "Python", resource: "Python Basics - Resource Link" },
    { name: "C++", resource: "C++ Tutorial - Resource Link" },
    { name: "JavaScript", resource: "JavaScript for Beginners - Resource Link" },
    { name: "Maths", resource: "Mathematics Study Guide - Resource Link" },
    { name: "Chemistry", resource: "Chemistry Theory & Practice - Resource Link" },
    { name: "Physics", resource: "Physics Fundamentals - Resource Link" },
  ];

  // Get current date
  const today = new Date();
  const currentDate = today.toLocaleDateString();

  return (
    <div className="courses-page">
      {/* Header with profile, settings, logout, notification icons */}
      <div className="header">
        <div className="left-header">
          <FaUser size={30} className="profile-icon" />
          <h2>Hello Iswarya!</h2>
        </div>
        <div className="right-header">
          <FaBell size={25} className="icon" />
          <FaCog size={25} className="icon" />
          <FaSignOutAlt size={25} className="icon" />
        </div>
      </div>

      {/* Calendar Section */}
      <div className="calendar">
        <h3>Today's Date</h3>
        <p>{currentDate}</p>
      </div>

      {/* Course Flow with Resources */}
      <div className="course-flow">
        <h3>Course Flow</h3>
        <ul className="course-list">
          {courses.map((course, index) => (
            <li key={index} className="course-item">
              <h4>{course.name}</h4>
              <p>
                <a href={course.resource} target="_blank" rel="noopener noreferrer">
                  {course.resource}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Button to go back to homepage */}
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default CoursesPage;
