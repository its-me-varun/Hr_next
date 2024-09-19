import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);

  const toggleEmployeeMenu = () => {
    setIsEmployeeOpen(!isEmployeeOpen);
  };

  return (
    <div className="sidebar">
      <img 
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/... (your base64 image here) ..." 
        alt="HR Nest Logo" 
        className="logo" 
      />
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/my-profile">My Profile</Link></li>
        <li onClick={toggleEmployeeMenu} className="toggle">
          Employee
          {isEmployeeOpen ? ' ▲' : ' ▼'}
          {isEmployeeOpen && (
            <ul className="nested">
              <li><Link to="/employee/add">Add Employee</Link></li>
              <li><Link to="/employee/view">View Employee</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/claim-management">Claim Management</Link></li>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
