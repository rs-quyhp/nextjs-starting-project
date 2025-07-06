import Post from "./Post.component";
import NewPost from "./NewPost.component";
import styles from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal.component";

const PostsList = (props) => {
  const { data } = props;
  const [name, setName] = useState("SBH");
  const [content, setContent] = useState("Content test!");
  const [isModalVisible, setIsModalVisible] = useState(true);

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onContentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const hideModalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {isModalVisible && (
        <Modal hideModalHandler={hideModalHandler}>
          <NewPost
            setName={onNameChangeHandler}
            setContent={onContentChangeHandler}
          />
        </Modal>
      )}

      <ul className={styles.posts}>
        <li>
          <Post name={name} content={content} />
        </li>
        {data.map((item) => (
          <li>
            <Post name={item.name} content={item.content} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostsList;
