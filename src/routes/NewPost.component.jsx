import { useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import Modal from "../components/Modal.component";
import styles from "./NewPost.module.css";

function NewPost(props) {
  const { addPostHandler } = props;
  const [name, setName] = useState("SBH");
  const [content, setContent] = useState("Content test!");
  const navigate = useNavigate();
  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onContentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const hideModalHandler = () => {
    navigate("..");
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
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            name="name"
            required
            rows={3}
            onChange={onNameChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="content"
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
      </Form>
    </Modal>
  );
}

export default NewPost;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const post = Object.fromEntries(formData);
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
};
