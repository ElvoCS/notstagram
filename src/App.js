import React, { useState } from "react";
import Post from "./Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Elvo",
      caption: "Shes working",
      imageUrl:
        "https://i.guim.co.uk/img/media/6088d89032f8673c3473567a91157080840a7bb8/413_955_2808_1685/master/2808.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=412cc526a799b2d3fff991129cb8f030",
    },
    {
      username: "Jessica",
      caption: "Look at my mountain",
      imageUrl: "https://i.imgur.com/eQbWtC9.jpg",
    },
  ]);

  return (
    <div className="App">
      {/*Heaader*/}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt="insta logo"
        />
      </div>
      <h1> HEYO</h1>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
