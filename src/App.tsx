import { useState } from "react";
import MainHeader from "./components/MainHeader.component";
import PostsList from "./components/PostsList.component";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(true);

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
        isModalVisible={isModalVisible}
        hideModalHandler={hideModalHandler}
      />
    </>
  );
}

export default App;
