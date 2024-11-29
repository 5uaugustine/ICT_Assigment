import React, { useState } from 'react';

const Blogss = () => {
  const [formData, setFormData] = useState({
    blogName: '',
    description: '',
    authorName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Blog Data:', formData);
    alert('Blog added successfully!');
    setFormData({ blogName: '', description: '', authorName: '' });
  };

  return (
    <div style={styles.container}>
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Blog Name:</label>
          <input
            type="text"
            name="blogName"
            value={formData.blogName}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Author Name:</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
    container: {
      padding: '20px',
      maxWidth: '400px',
      margin: 'auto',
      backgroundColor: '#1e1e1e',
      borderRadius: '10px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
      color: '#e0e0e0',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '10px',
      backgroundColor: '#2e2e2e',
      border: '1px solid #555',
      borderRadius: '5px',
      color: '#e0e0e0',
      fontSize: '14px',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#ff6f61',
    },
    button: {
      padding: '10px',
      backgroundColor: '#ff6f61',
      color: '#121212',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    buttonHover: {
      backgroundColor: '#e65b54',
      transform: 'translateY(-2px)',
    },
  };
  
export default Blogss;
