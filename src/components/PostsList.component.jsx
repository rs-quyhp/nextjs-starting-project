import { useLoaderData } from "react-router-dom";
import Post from "./Post.component";
import * as styles from "./PostsList.module.css";

const PostsList = (props) => {
  const posts = useLoaderData();

  return (
    <>
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
