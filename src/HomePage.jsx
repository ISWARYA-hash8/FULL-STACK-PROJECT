import React from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { FaUser, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./HomePage.css";import { useNavigate } from "react-router-dom";  // Import useNavigate



const UserHomePage = () => {

  // Data for CGPA Bar Chart (7 semesters)
  const cgpaData = {
    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7"],
    datasets: [
      {
        label: "CGPA",
        data: [8.5, 8.0, 8.2, 8.3, 8.4, 8.6, 8.7], // Example CGPA data for each semester
        backgroundColor: "rgba(26, 115, 232, 0.2)",
        borderColor: "rgba(26, 115, 232, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Data for Learning Progress (exponentially increasing)
  const progressData = {
    labels: Array.from({ length: 10 }, (_, i) => `Week ${i + 1}`),
    datasets: [
      {
        label: "Learning Progress",
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="homepage">
      {/* Header */}
      <div className="header">
        <div className="left-header">
          <FaUser size={30} className="profile-icon" />
          <h2>Hello Iswarya!</h2>
        </div>
        <div className="center-header">
          <p className="quote">"The best way to predict the future is to create it."</p>
        </div>
        <div className="right-header">
          <FaBell size={25} className="icon" />
          <FaCog size={25} className="icon" />
          <FaSignOutAlt size={25} className="icon" />
        </div>
      </div>

      {/* Top Left Stats */}
      <div className="top-stats">
        <div className="stat-box">
          <h3>FA Percentage</h3>
          <p>85%</p>
        </div>
        <div className="stat-box">
          <h3>Attendance</h3>
          <p>90%</p>
        </div>
        <div className="stat-box">
          <h3>Placement Points</h3>
          <p>1200</p>
        </div>
      </div>

      {/* Learning Progress Graph */}
      <div className="progress-section">
        <div className="progress">
          <h3>Learning Progress</h3>
          <Line data={progressData} options={{ responsive: true }} height={150} />
        </div>

        {/* CGPA Bar Chart */}
        <div className="cgpa-chart">
          <h3>CGPA for 7 Semesters</h3>
          <Bar data={cgpaData} options={{ responsive: true }} height={150} />
        </div>
      </div>

      {/* Course Completion Status */}
      <div className="course-status">
        <h3>Course Completion Status</h3>
        <table className="course-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Completion Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Java</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>C</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>85%</td>
            </tr>
            <tr>
              <td>C++</td>
              <td>75%</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>Maths</td>
              <td>88%</td>
            </tr>
            <tr>
              <td>Chemistry</td>
              <td>92%</td>
            </tr>
            <tr>
              <td>Physics</td>
              <td>80%</td>
            </tr>
          </tbody>
        </table>
        <button className="view-button">View More</button>
      </div>
    </div>
    
  );
};

export default UserHomePage;
