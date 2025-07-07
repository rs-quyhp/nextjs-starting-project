import styles from "./NewPost.module.css";
import { useState } from "react";

function NewPost(props) {
  const { hideModalHandler, addPostHandler } = props;
  const [name, setName] = useState("SBH");
  const [content, setContent] = useState("Content test!");

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onContentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const postData = {
      name,
      content,
    };

    addPostHandler(postData);
    hideModalHandler();
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onNameChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={onContentChangeHandler}
        />
      </p>
      <div className={styles.actions}>
        <button type="button" onClick={hideModalHandler}>
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
