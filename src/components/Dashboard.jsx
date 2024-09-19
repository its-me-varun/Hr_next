import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top-bar">
        <h3>Dashboard</h3>
        <div className="search-bar">
          <input type="text" placeholder="Search with Unique ID or Name" />
          <button>Search</button>
        </div>
        <div className="company-name">
          Stratosphere IT Service Pvt Ltd
        </div>
      </div>

      <div className="summary-section">
        <div className="summary-box total-members">
          <h4>213</h4>
          <p>Total Members</p>
        </div>
        <div className="summary-box total-employees">
          <h4>172</h4>
          <p>Total Employees</p>
        </div>
        <div className="summary-box total-consultants">
          <h4>0</h4>
          <p>Total Consultants</p>
        </div>
        <div className="summary-box total-managers">
          <h4>40</h4>
          <p>Total Managers</p>
        </div>
        <div className="summary-box total-admins">
          <h4>1</h4>
          <p>Total Admins</p>
        </div>
      </div>

      <div className="member-list">
        <h4>Member List</h4>
        <table>
          <thead>
            <tr>
              <th>SN#</th>
              <th>Unique ID</th>
              <th>Name</th>
              <th>Employee Code</th>
              <th>Designation</th>
              <th>Manager Code</th>
              <th>Manager Designation</th>
              <th>Contact</th>
              <th>Division</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>14527</td>
              <td>Ankit Seth</td>
              <td>14527</td>
              <td>Employee</td>
              <td>5665</td>
              <td>Manager</td>
              <td>991020020</td>
              <td>North</td>
              <td><button>Active</button></td>
            </tr>
            {/* More rows */}
          </tbody>
        </table>
      </div>

      <div className="employee-details">
        <h4>Employee Details</h4>
        <table>
          <thead>
            <tr>
              <th>Zip File</th>
              <th>Site</th>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Profile Image</th>
              <th>Personal</th>
              <th>Bank</th>
              <th>Emergency</th>
              <th>Aadhar Card</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12345</td>
              <td>Ankit Seth</td>
              <td>+91 9910200202</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            {/* More rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
