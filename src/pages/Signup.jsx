// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { axiosInstance } from '../axiosInstance';
import styles from './Signup.module.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/signup', new URLSearchParams({
        username,
        password
      }));
      setMessage(response.data);
      if(response.data == "Signup successful")
      {
          navigate('/login');
      }
     
    } catch (error) {
      // Improved error handling
      if (error.response) {
        // Server responded with a status other than 2xx
        setMessage(`Error: ${error.response.data.message || 'Signup failed'}`);
      } else if (error.request) {
        // Request was made but no response received
        setMessage('Error: No response from server');
      } else {
        // Something else caused an error
        setMessage(`Error: ${error.message}`);
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sign Up</h1>
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
            <label htmlFor="password" className={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>Sign Up</button>
          {message && <p className={styles.message}>{message}</p>}
        </form>
        <div className={styles.footer}>
          <Link to="/login">Login</Link> | <Link to="/change-password">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;







// // src/pages/Signup.jsx
// import React, { useState } from 'react';
// import axiosInstance from '../axiosInstance';
// import styles from './Signup.module.css';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.post('/signup', new URLSearchParams({
//         username,
//         password
//       }));
//       setMessage(response.data);
//       navigate('/login');// Assuming response contains a message
//     } catch (error) {
//       setMessage('Signup failed');
//     }

//   };

//   return (
//     <div className={styles.container}>
//       <form onSubmit={handleSubmit}>
//         <h1>Signup Page</h1>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Signup</button>
//         {message && <p>{message}</p>}
//       </form>
//     </div>
//   );
// }

// export default Signup;