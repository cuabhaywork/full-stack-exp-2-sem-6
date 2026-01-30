// Navbar.jsx
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{
      backgroundColor: isDarkMode ? '#1a1a1a' : '#333',
      color: 'white',
      padding: '15px',
      marginBottom: '20px',
      transition: 'background-color 0.3s ease'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>My App</h1>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button
            onClick={toggleTheme}
            style={{
              padding: '8px 16px',
              backgroundColor: isDarkMode ? '#555' : '#666',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              fontSize: '18px'
            }}
            title="Toggle dark mode"
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
          {user ? (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ marginRight: '5px' }}>Welcome, {user.name}!</span>
              <button
                onClick={logout}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <span>Not logged in</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
