import Post from "./Post.component"
import NewPost from "./NewPost.component"
import styles from "./PostsList.module.css";
import { useState } from "react";

const PostsList = (props) => {
    const {data} = props
    const [name, setName] = useState('SBH')
    const [content, setContent] = useState('Content test!')

    const onNameChanged = (event) => {
        setName(event.target.value)
    }
    
    const onContentChanged = (event) => {
        setContent(event.target.value)
    }

    return (
        <>
            <NewPost setName={onNameChanged} setContent={onContentChanged}/>
            <ul className={styles.posts}>
                <li><Post name={name} content={content}/></li>
            {data.map((item) => (
                <li>
                    <Post name={item.name} content={item.content} />
                </li>
            ))}
            </ul>
        </>
    );
}

export default PostsList;