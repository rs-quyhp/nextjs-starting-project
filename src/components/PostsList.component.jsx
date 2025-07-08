import Post from "./Post.component";
import NewPost from "./NewPost.component";
import * as styles from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal.component";

const PostsList = (props) => {
  const { isModalVisible, hideModalHandler } = props;
  const [posts, setPosts] = useState([]);

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

  return (
    <>
      {isModalVisible && (
        <Modal hideModalHandler={hideModalHandler}>
          <NewPost
            hideModalHandler={hideModalHandler}
            addPostHandler={addPostHandler}
          />
        </Modal>
      )}

      {!posts?.length && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Add some !</p>
        </div>
      )}

      <ul className={styles.posts}>
        {posts.map((item) => (
          <li key={item.content}>
            <Post name={item.name} content={item.content} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostsList;
