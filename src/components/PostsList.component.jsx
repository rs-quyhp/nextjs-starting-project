import { useEffect, useState } from "react";
import NewPost from "../routes/NewPost.component";
import Post from "./Post.component";
import * as styles from "./PostsList.module.css";

const PostsList = (props) => {
  const { isModalVisible, hideModalHandler } = props;
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const addPostHandler = (post) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((previousPosts) => [...previousPosts, post]);
  };

  useEffect(() => {
    const getPosts = async () => {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    };

    getPosts();
  }, []);

  return (
    <>
      {isModalVisible && (
        <NewPost
          hideModalHandler={hideModalHandler}
          addPostHandler={addPostHandler}
        />
      )}

      {!isFetching && !posts?.length && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Add some !</p>
        </div>
      )}

      {!isFetching && (
        <ul className={styles.posts}>
          {posts.map((item) => (
            <li key={item.content}>
              <Post name={item.name} content={item.content} />
            </li>
          ))}
        </ul>
      )}

      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Loading posts . . .</h2>
        </div>
      )}
    </>
  );
};

export default PostsList;
