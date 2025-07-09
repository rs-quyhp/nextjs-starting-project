import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList.component";

const Posts = () => {
  return (
    <>
      <Outlet />
      <PostsList />
    </>
  );
};

export default Posts;
