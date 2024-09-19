// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { setToken } = useAuth(); // Correctly invoke useAuth

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login logic
    if (username === 'testuser' && password === '1123') {
      const simulatedToken = 'this_is_a_test_token';
      setToken(simulatedToken); // Set the simulated token
      navigate("/", { replace: true }); // Redirect to home page
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className={styles.label}>Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.button}>Login</button>
          {message && <p className={styles.message}>{message}</p>}
        </form>
        <div className={styles.footer}>
          <Link to="/signup">Sign Up</Link> | <Link to="/change-password">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
