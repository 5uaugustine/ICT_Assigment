import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setBlogs(response.data); 
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={styles.container}>
      <h1>Blog Dashboard</h1>
      <div style={styles.cardContainer}>
        {blogs.map((blog) => (
          <div key={blog.id} style={styles.card}>
            <h3>{blog.title}</h3>
            <p>ID: {blog.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#121212',
      color: '#e0e0e0',
      borderRadius: '10px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
    },
    card: {
      border: '1px solid #333',
      borderRadius: '10px',
      padding: '15px',
      width: '200px',
      backgroundColor: '#1e1e1e',
      color: '#e0e0e0',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0px 6px 10px rgba(255, 111, 97, 0.5)',
    },
  };
  
export default Dashboard;
