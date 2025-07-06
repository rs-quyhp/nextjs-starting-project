import Post from "./Post.component"
import styles from "./PostsList.module.css";

const PostsList = (props) => {
const {data} = props

    return (
    <ul className={styles.posts}>
      {data.map((item) => (
        <li>
            <Post name={item.name} content={item.content} />
        </li>
      ))}
    </ul>
    );
}

export default PostsList;