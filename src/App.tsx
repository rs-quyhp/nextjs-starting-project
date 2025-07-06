import PostsList from "./components/PostsList.component";
interface IPost {
  name: string;
  content: string;
}

function App() {
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

  return <PostsList data={data} />;
}

export default App;
