import styles from "./Post.module.css";

const Post = (props) => {
  const { name, content } = props;
  return (
    <div className={styles.post}>
      <p className={styles.name}>{name}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Post;
