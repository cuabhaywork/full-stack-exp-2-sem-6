import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="dashboard-container" style={{
      backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f0ff',
      borderColor: isDarkMode ? '#444' : 'purple',
      color: isDarkMode ? '#e0e0e0' : '#333'
    }}>
      <h3 className="dashboard-header" style={{ color: isDarkMode ? '#ffffff' : '#333' }}>Dashboard</h3>
      <div className="dashboard-content">
        {user ? (
          <>
            <div className="user-info" style={{
              backgroundColor: isDarkMode ? '#3a3a3a' : '#fff',
              borderLeftColor: isDarkMode ? '#8b7bb8' : 'purple',
              color: isDarkMode ? '#e0e0e0' : '#333'
            }}>
              👤 Logged in as: <strong style={{ color: isDarkMode ? '#a78bfa' : 'purple' }}>{user.name}</strong>
            </div>
            <div className="status-info" style={{
              backgroundColor: isDarkMode ? '#3a3a3a' : '#fff',
              color: isDarkMode ? '#e0e0e0' : '#666'
            }}>
              Status: <span className="status-badge">Online</span>
            </div>
          </>
        ) : (
          <p className="login-prompt" style={{
            backgroundColor: isDarkMode ? '#3a2a2a' : '#fff0f0',
            borderLeftColor: isDarkMode ? '#ff6666' : '#ff4444',
            color: isDarkMode ? '#ff8888' : '#ff4444'
          }}>Please log in to see your dashboard.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
