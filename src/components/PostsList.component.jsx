import Post from "./Post.component";
import NewPost from "./NewPost.component";
import styles from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal.component";

const PostsList = (props) => {
  const { data, isModalVisible, hideModalHandler } = props;
  const [name, setName] = useState("SBH");
  const [content, setContent] = useState("Content test!");

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onContentChangeHandler = (event) => {
    setContent(event.target.value);
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
