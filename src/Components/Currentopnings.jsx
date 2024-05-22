import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import style from './Currentopning.module.css';

// Function to fetch custom posts
const fetchCustomPosts = async () => {
  try {
    // Using environment variable for API URL
    const apiUrl = `${import.meta.env.VITE_API_CUSTOM_KEY}/careers`;
    console.log('Fetching data from:', apiUrl); // Debugging line
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching custom posts:', error);
    throw error;
  }
};

function Currentopnings() {
  const [posts, setPosts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Function to fetch posts and update state
    const getPosts = async () => {
      try {
        const data = await fetchCustomPosts();
        // Ensure data is an array
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          throw new Error('API response is not an array');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error message
  }

  return (
    <Container>
      <Row>
        <Col md={12} className={style["TopHeading"]}>
          <h1 className="text-center">Career</h1>
        </Col>
      </Row>
      <Row>
        {posts.map(post => (
          <Col md={4} key={post.id} style={{ paddingBottom: '40px' }}>
            <div className={style["IMAGEC"]}>
              {/* Ensure the API provides the correct URL field */}
              <img src={post.featured_image_src} alt={post.title.rendered} width={100}/>
            </div>
            <div className={style["Headingg"]}>
              <h2>{post.title.rendered}</h2>
              <div className="d-flex justify-content-center">
                <p>Apply Now</p>&nbsp;&nbsp;&nbsp;
                <p>LinkedIn <i className="bi bi-telegram"></i></p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Currentopnings;
