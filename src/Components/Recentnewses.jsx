import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./RecentBlog.module.css";
import { ArrowRight } from "react-bootstrap-icons";

function formetDate(dateString) {
  const options = { month: "long", day: "numeric", year: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}
function RecentNews() {
  const [isHovered, setIsHovered] = useState(false); //for hover button on post
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${import.meta.env.VITE_API_KEY}/posts`;
    axios.get(url).then((res) => {
      setPosts(res.data);
    });
  }, []);

  // Function to chunk the posts into groups of three
  const chunkPosts = (arr, chunkSize) => {
    let chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, (i += chunkSize)));
    }
    return chunks;
  };

  const chunkedPosts = chunkPosts(posts, 3);

  return (
    <Container className={style["RecBlogMainC"]}>
      <div className={style["RecentBlogHeading"]}>
        <h1> Recent Blogs</h1>
      </div>
      <div className={style["Reccarousell"]}>
        <Carousel indicators={false} controls={true}>
          {chunkedPosts.map((chunk, index) => (
            <Carousel.Item key={index} className={style["carouselcont"]}>
              <Row>
                {chunk.map((post) => (
                  <Col key={post.id}>
                    <Card className={style["CardIttem"]}>
                      <div
                        className={style["rama"]}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <Link to={`/blog/${post.id}`}>
                          <Card.Img
                            variant="top"
                            src={post.featured_image_src}
                            className={style["PostcaroumgHome"]}
                          />
                        </Link>
                        <Card.Body>
                          <Card.Text className={style["PostDate"]}>
                            <p>{formetDate(post.date)}</p>
                            {isHovered && (
                               <Link to={`/blog/${post.id}`}>
                              <button className={style["HoverButtonn"]}>
                                <ArrowRight />{" "}
                              </button>
                                </Link>
                            )}
                          </Card.Text>
                          <Link to={`/blog/${post.id}`}>
                            <Card.Title className={style["PostTitle"]}>
                              {post.title.rendered}
                            </Card.Title>
                          </Link>
                          <Card.Text className={style["WebsiteAuther"]}>
                            <p>By Docusoft</p>
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export default RecentNews;
