import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import style from "./Blog.module.css";


const truncate = (text, limit) => {
  const strippedText = text.replace(/<\/?[^>]+(>|$)/g, "");
  if (strippedText.length <= limit) {
    return strippedText;
  }
  return strippedText.substring(0, limit) + "...";
};

function Sidebar() {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        let url = `${import.meta.env.VITE_API_KEY}/posts/`;
        const response = await axios.get(url);
        setLatestPosts(response.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <div className={style["sidebar"]}>
      <h2>Recent Posts</h2>
      {latestPosts.map((post) => (
        <Card className="border-0">
          <Row key={post.id} className="d-flex">
            {/* <Col md={4} className={style["featuredImg"]}>
            
          </Col> */}
            <Col className={style["TiTleExCerPt"]}>
              <div className={style["featuredImg"]}>
                <Link to={`/posts/${post.id}`}>
                  <img src={post.featured_image_src} alt="Featured" />
                  </Link>
                </div>
              <div>
                <Link to={`/posts/${post.id}`}>
                  <h3>{post.title.rendered}</h3>
                </Link>
                <p>{truncate(post.excerpt.rendered, 82)}</p>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
}

export default Sidebar;
