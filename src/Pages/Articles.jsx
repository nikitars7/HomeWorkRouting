import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Articles.module.css";
const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setArticles(data));
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((post) => (
        <div className={styles.Articles} key={post.id}>
          <p>
            <Link to={`${post.id}`}>{`title: ${post.title}`}</Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Articles;
