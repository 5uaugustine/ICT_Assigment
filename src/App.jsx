import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Blogss from './Components/Blogss';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={styles.navbar}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/Blogss" style={styles.link}>
            Add Blog
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Blogss" element={<Blogss />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default App;
