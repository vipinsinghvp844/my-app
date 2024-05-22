import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesUrl = `${import.meta.env.VITE_API_KEY}/categories`;
        const categoriesResponse = await axios.get(categoriesUrl);
        const categoriesData = categoriesResponse.data;

        // Fetch post count for each category
        const categoriesWithPostCount = await Promise.all(
          categoriesData.map(async (category) => {
            const postsUrl = `${import.meta.env.VITE_API_KEY}/posts`;
            const postsResponse = await axios.get(postsUrl, {
              params: { categories: category.id, per_page: 100 }, // Ensure to set a high enough per_page value
            });
            const postsData = postsResponse.data;
            return { ...category, post_count: postsData.length };
          })
        );

        setCategories(categoriesWithPostCount);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories or posts:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
     <div>
      {categories
        .filter(category => category.post_count > 0) // Filter out categories with post_count of 0
        .map((category) => (
         <Link to={`/category/${category.slug}`}>
          <p key={category.id} style={{
            fontFamily: 'open-Sans',
            fontSize: '14px',
            lineHeight:'26px',
          }}>
            
            {category.name} ({category.post_count})
            </p>
            </Link>
        ))}
    </div>
    //  <div>
    //   {categories.map((category) => {
    //     if (category.post_count > 0) {
    //       return (
    //         <p key={category.id}>
    //           {category.name} ({category.post_count})
    //         </p>
    //       );
    //     } else {
    //       return null; // Don't render if post count is 0
    //     }
    //   })}
    // </div>
  );
}

export default CategoryList;
