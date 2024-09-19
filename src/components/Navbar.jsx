// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Add styles in Navbar.css

// const Navbar = () => {
//   const handleLogout = () => {
//     // Implement logout logic here
//     console.log("Logout clicked");
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-brand">
//         <Link to="/">MyApp</Link>
//       </div>
//       <button className="logout-button" onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Navbar;




// components/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css'; // Ensure you have Navbar styling

const Navbar = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear user authentication data here (e.g., clear cookies or local storage)
    setToken();
    navigate("/", { replace: true });
  };
 
  
   
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <a href="/">HR Nest</a>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;

