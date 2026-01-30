import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Login = () => {
  const [nameInput, setNameInput] = useState('');
  const { login } = useContext(AuthContext);
  const { isDarkMode } = useContext(ThemeContext);

  const handleLogin = () => {
    if (nameInput.trim()) {
      login(nameInput);
      setNameInput('');
    }
  };

  return (
    <div style={{
      border: `2px solid orange`,
      padding: '20px',
      margin: '20px 0',
      borderRadius: '8px',
      backgroundColor: isDarkMode ? '#2a2a2a' : '#fff',
      transition: 'background-color 0.3s ease'
    }}>
      <h3 style={{ color: isDarkMode ? '#ffffff' : '#333' }}>Login</h3>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: `1px solid ${isDarkMode ? '#555' : '#ccc'}`,
            backgroundColor: isDarkMode ? '#3a3a3a' : '#fff',
            color: isDarkMode ? '#e0e0e0' : '#000',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
