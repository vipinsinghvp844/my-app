import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Sidebaarsinglelpost from "./Sidebaar single l post";
import SearchBox1 from "./Searchboxx";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import style from "./Blog.module.css";
import CategoryList from './Showcategory.jsx'

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  // const [author, setAuthor] = useState('');
  const [olderPost, setOlderPost] = useState(null);
  const [newerPost, setNewerPost] = useState(null);

  function formetDate(dateString) {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch post data
        const postUrl = `${import.meta.env.VITE_API_KEY}/posts/${id}`;
        const postResponse = await axios.get(postUrl);
        setPost(postResponse.data);

        // Fetch categories
        const categoriesUrl = `${
          import.meta.env.VITE_API_KEY
        }/categories?post=${id}`;
        const categoriesResponse = await axios.get(categoriesUrl);
        setCategories(categoriesResponse.data);

        // Fetch tags
        const tagsUrl = `${import.meta.env.VITE_API_KEY}/tags?post=${id}`;
        const tagsResponse = await axios.get(tagsUrl);
        setTags(tagsResponse.data);

        // Fetch older post
        const olderPostUrl = `${
          import.meta.env.VITE_API_KEY
        }/posts?per_page=1&order=asc&orderby=date&after=${
          postResponse.data.date
        }`;
        const olderPostResponse = await axios.get(olderPostUrl);
        setOlderPost(olderPostResponse.data[0]);

        // Fetch newer post
        const newerPostUrl = `${
          import.meta.env.VITE_API_KEY
        }/posts?per_page=1&order=desc&orderby=date&before=${
          postResponse.data.date
        }`;
        const newerPostResponse = await axios.get(newerPostUrl);
        setNewerPost(newerPostResponse.data[0]);
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container>
      <Row>
        <Col md={8} className="pb-5">
          {Object.keys(post).length ? (
            <div>
              <div className={style["Titlediv"]}>
                <h1 className="HEAD">{post.title.rendered}</h1>
              </div>
              <div className={style["Dateauthecateg"]}>
                <p> Posted on {formetDate(post.date)}</p>
                <p>- By Docusoft -</p>
                <p>
                  <i class="bi bi-signpost-2"></i>&nbsp; &nbsp;
                  {categories.map((category, index) => (
                    <span key={category.id}>
                      {index > 0 ? ", " : ""}
                      {category.name}
                    </span>
                  ))}
                </p>
              </div>

              <div>
                <Image src={post.featured_image_src} alt="" fluid />
              </div>
              <div className={style["Spostcontent"]}>
                <p
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                ></p>
              </div>
              <div className={style["TagNameC"]}>
                <p>
                  {tags.map((tag, index) => (
                    <button key={tag.id}>{tag.name}</button>
                  ))}
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="HEAD">Loading...</h1>
            </div>
          )}
          <div className={style["Pagination"]}>
            <Col>
              {newerPost && (
                <Link
                  to={`/posts/${newerPost.id}`}
                  className={style["ONPostLink"]}
                >
                  {newerPost.title.rendered} <br />
                  <span> Older Post</span>
                </Link>
              )}
            </Col>
            <Col>
              {olderPost && (
                <Link
                  to={`/posts/${olderPost.id}`}
                  className={style["ONPostLink"]}
                >
                  {olderPost.title.rendered} <br /> <span>Newer Post</span>
                </Link>
              )}
            </Col>
          </div>
        </Col>
        <Col md={4} className={style["Sidebarrcolumn"]}>
          <div>
            <SearchBox1 />
          </div>
          <div>
            <Sidebaarsinglelpost />
          </div>
          <div className={style["sidebar"]}>
            <h2>Categories</h2>
          </div>
              <CategoryList />
        </Col>
      </Row>
    </Container>
  );
}

export default SinglePost;
