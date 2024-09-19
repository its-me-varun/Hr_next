import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ProtectedRoute } from './ProtectedRoute';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ChangePassword from '../pages/ChangePassword';
import Dashboard from '../components/Dashboard';
import MyProfile from '../components/MyProfile';
import Help from '../components/Help';
import Reports from '../components/Reports';
import Settings from '../components/Settings';
import ClaimManagement from '../components/ClaimManagement';
import AddEmployee from '../components/AddEmployee';
import Attendance from '../components/Attendance';
import Sidebar from '../components/Sidebar';
import "./MainRoutes.css"
import ViewEmployee from '../components/ViewEmployee';

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes (no NAVBAR, NO SIDEBAR) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/change-password" element={<ChangePassword />} />

        {/* Protected routes (require navbar and Sidebar) */}
        <Route element={<ProtectedRoute />}>
          <Route 
            path="/*" 
            element={
              <div className="app-container">
                <Navbar /> {/* Navbar fixed at the top */}
                <div className="main-container">
                  <Sidebar /> {/* Sidebar with content adjusted */}
                  <div className="content">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/my-profile" element={<MyProfile />} />
                      <Route path="/employee/add" element={< AddEmployee/>} />   
                       <Route path="/employee/view"element={< ViewEmployee/>} />   
                      <Route path="/attendance" element={<Attendance />} />
                      <Route path="/claim-management" element={<ClaimManagement />} />
                      <Route path="/help" element={<Help />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/reports" element={<Reports />} />
                    </Routes>
                  </div>
                </div>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
