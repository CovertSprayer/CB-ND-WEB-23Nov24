import React, { useEffect, useState } from 'react'
// import Editor from '../components/Editor'
import Button from '../components/Button'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { createBlog, getBlogs } from '../api/blogs';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  async function fetchData() {
    const res = await getBlogs();
    setBlogs(res.data)
  }

  useEffect(() => {
    fetchData();
    console.log(blogs)
  }, [])

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => setTitle(prev => e.target.value);

  const handleClick = async () => {
    try {
      const res = await createBlog({title, content});
      if(res.success){
        
      }
    } catch (error) {
      alert(error.response.data.message || "Something went wrong!")
    }
  }

  return (
    <div className='max-w-[662px] mx-auto'>
      <textarea onChange={handleTitleChange} name='title' className='w-full p-2 text-xl font-bold' rows={1} placeholder='Title goes here...' value={title}></textarea>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <Button className="mt-2" onClick={handleClick}>Publish</Button>
    </div>
  )
}

export default Home