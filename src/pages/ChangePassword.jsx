// src/pages/ChangePassword.jsx
import React, { useState } from 'react';
import { axiosInstanceChangepassword } from '../axiosInstance'; // Adjust import if needed
import styles from './ChangePassword.module.css';
import { Link,useNavigate } from 'react-router-dom';

function ChangePassword() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstanceChangepassword.post('/change-password', {
        "username":username,
        "oldPassword":currentPassword,
        "newPassword":newPassword
      });
      setMessage(response.data);
      if(response.data=="Password changed successfully")
      {
        setTimeout(() => {
          navigate("/login");
        }, 5000); 
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Password change failed');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Change Password</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className={styles.label}>Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="currentPassword" className={styles.label}>Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="newPassword" className={styles.label}>New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>Change Password</button>
          {message && <p className={styles.message}>{message}</p>}
        </form>
        <div className={styles.footer}>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
