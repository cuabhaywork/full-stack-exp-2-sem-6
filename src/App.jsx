import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Parent from './propDrilling/Parent';
import './App.css';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
      color: isDarkMode ? '#e0e0e0' : '#000000',
      minHeight: '100vh',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <Navbar />
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: isDarkMode ? '#ffffff' : '#333333'
        }}>
          React Context API & Prop Drilling Demo
        </h1>

        {/* Context API Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{
            borderBottom: `3px solid ${isDarkMode ? '#666666' : '#333'}`,
            paddingBottom: '10px',
            color: isDarkMode ? '#ffffff' : '#333333'
          }}>
            📚 Context API Demo
          </h2>
          <Login />
          <Dashboard />
        </section>

        {/* Prop Drilling Section */}
        <section>
          <h2 style={{
            borderBottom: `3px solid ${isDarkMode ? '#666666' : '#333'}`,
            paddingBottom: '10px',
            color: isDarkMode ? '#ffffff' : '#333333'
          }}>
            🔄 Prop Drilling Demo
          </h2>
          <p style={{
            color: isDarkMode ? '#aaaaaa' : '#666',
            marginBottom: '15px'
          }}>
            Watch how props are passed from Parent → Child → GrandChild:
          </p>
          <Parent />
        </section>
      </div>
    </div>
  );
}

export default App;
