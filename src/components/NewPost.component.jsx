import classes from "./NewPost.module.css";

function NewPost(props) {
  const { setName, setContent } = props;
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={setName} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={setContent} />
      </p>
    </form>
  );
}

export default NewPost;
