import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import style from './Blog.module.css';

function formetDate(dateString) {
  const options = { month: "long", day: "numeric", year: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

const truncate = (text, limit) => {
  const strippedText = text.replace(/<\/?[^>]+(>|$)/g, "");
  if (strippedText.length <= limit) {
    return strippedText;
  }
  return strippedText.substring(0, limit) + '...';
};

const getAllPosts = async () => {
  let allPosts = [];
  let page = 1;
  let fetchMore = true;

  try {
    while (fetchMore) {
      let url = `${import.meta.env.VITE_API_KEY}/posts?page=${page}`;
      const response = await axios.get(url);

      if (response.data.length > 0) {
        allPosts = allPosts.concat(response.data);
        page++;
      } else {
        fetchMore = false;
      }
    }
  } catch (error) {
    console.error("Error fetching posts", error);
  }

  return allPosts;
};

function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  // Calculate the current posts to display based on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <Container className="pb-5">
      <Row>
        <Col md={12} className={style["TopHeading"]}>
          <h1 className="text-center">Blog</h1>
        </Col>
      </Row>
      <Row className="row-gap-4">
        {
          currentPosts.length ? currentPosts.map((post) => (
            <Col key={post.id} md={4} lg={4} xs={12} sm={6} className="d-flex">
              <Card className="card-equal flex-fill border-0 bg-white">
                <Link to={`/posts/${post.id}`}>
                  <div className={style["Blogimage"]}>
                    <Card.Img variant="top" src={post.featured_image_src} />
                  </div>
                  <Card.Body>
                    <div className={style["BlogTitle"]}>
                      <Card.Title>{post.title.rendered}</Card.Title>
                    </div>
                    <Card.Text>
                      <div className={style["Blogexcerpt"]}>
                        <p>{truncate(post.excerpt.rendered, 102)}</p>
                      </div>
                    </Card.Text>
                    <Card.Text className={style["BlogDate"]}>
                      <p>{formetDate(post.date)}</p>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          )) : <h1 style={{textAlign:'center'}}>Loading...</h1>
        }
      </Row>
      <Row className="pt-3">
        <Col md={12}>
          <Pagination className="justify-content-center">
            {[...Array(totalPages).keys()].map(number => (
              <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                {number + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default Posts;
