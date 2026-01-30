// Parent.jsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Child from "./Child";

const Parent = () => {
  const message = "Hello from Parent!";
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div style={{
      border: `2px solid ${isDarkMode ? '#4a90e2' : 'blue'}`,
      padding: '20px',
      margin: '10px',
      backgroundColor: isDarkMode ? '#2a2a2a' : '#fff',
      color: isDarkMode ? '#e0e0e0' : '#000',
      transition: 'all 0.3s ease'
    }}>
      <h2 style={{ color: isDarkMode ? '#ffffff' : '#000' }}>Parent Component</h2>
      <p style={{ color: isDarkMode ? '#aaaaaa' : '#666' }}>Passing message to Child...</p>
      <Child message={message} />
    </div>
  );
};

export default Parent;
