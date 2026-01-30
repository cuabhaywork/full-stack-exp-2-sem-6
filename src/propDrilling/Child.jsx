import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import GrandChild from "./GrandChild";

const Child = ({ message }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div style={{
      border: `2px solid ${isDarkMode ? '#4ecca3' : 'green'}`,
      padding: '20px',
      margin: '10px',
      backgroundColor: isDarkMode ? '#2a2a2a' : '#fff',
      color: isDarkMode ? '#e0e0e0' : '#000',
      transition: 'all 0.3s ease'
    }}>
      <h3 style={{ color: isDarkMode ? '#ffffff' : '#000' }}>Child Component</h3>
      <p style={{ color: isDarkMode ? '#aaaaaa' : '#666' }}>Received message from Parent, passing to GrandChild...</p>
      <GrandChild message={message} />
    </div>
  );
};

export default Child;
