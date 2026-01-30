import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const GrandChild = ({ message }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div style={{
      border: `2px solid ${isDarkMode ? '#ff6b6b' : 'red'}`,
      padding: '20px',
      margin: '10px',
      backgroundColor: isDarkMode ? '#2a2a2a' : '#fff',
      color: isDarkMode ? '#e0e0e0' : '#000',
      transition: 'all 0.3s ease'
    }}>
      <h4 style={{ color: isDarkMode ? '#ffffff' : '#000' }}>GrandChild Component</h4>
      <p style={{
        fontWeight: 'bold',
        color: isDarkMode ? '#ff8888' : 'darkred'
      }}>
        Final Message: {message}
      </p>
    </div>
  );
};

export default GrandChild;
