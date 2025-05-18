import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);

  async function getPosts(){
    const response = await axios.get("https://dummyjson.com/posts");
    console.log(response.data.posts);
    setPosts(response.data.posts);
  }

  // getPosts();

  useEffect(()=>{
    console.log("hello from useEffect");
    getPosts();
  }, [])

  return (
    <>
      <div>App</div>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  )
}

export default App