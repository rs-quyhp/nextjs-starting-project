import { useState } from "react";
import MainHeader from "./components/MainHeader.component";
import PostsList from "./components/PostsList.component";
interface IPost {
  name: string;
  content: string;
}

function App() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const data: IPost[] = [
    {
      name: "ShikamaruBH!",
      content: "Hello world!",
    },
    {
      name: "SBH",
      content: "NextJs is Awesome!",
    },
  ];

  const showModalHandler = () => {
    setIsModalVisible(true);
  };

  const hideModalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <PostsList
        data={data}
        isModalVisible={isModalVisible}
        hideModalHandler={hideModalHandler}
      />
    </>
  );
}

export default App;
