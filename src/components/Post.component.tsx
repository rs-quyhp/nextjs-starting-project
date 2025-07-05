interface IPost {
  name: string;
  content: string;
}

const Post = () => {
  const data: IPost[] = [
    {
      name: "ShikamaruBH",
      content: "Hello world!",
    },
    {
      name: "SBH",
      content: "NextJs is Awesome!",
    },
  ];
  return (
    <div>
      {data.map((post: IPost) => (
        <>
          <p>{post.name}</p>
          <p>{post.content}</p>
        </>
      ))}
    </div>
  );
};

export default Post;
