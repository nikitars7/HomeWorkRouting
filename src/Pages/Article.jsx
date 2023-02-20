import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Article.module.css";
const Article = () => {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    const getOneArticle = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    };
    getOneArticle();
  }, [params.id]);
  return (
    <div>
      <h1>Article</h1>
      <div className={styles.Article}>
        <p>{`UserId: ${post.userId}`}</p>
        <p>{`Title: ${post.title}`}</p>
        <p>{`Body: ${post.body}`}</p>
      </div>
      <button className={styles.Button} onClick={() => navigate("/HomeWorkRouting")}>
        MainPage
      </button>
      <button className={styles.Button} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default Article;
