import React, { useEffect, useState } from 'react'
import { getBlogById } from '../api/blogs'
import { useParams } from 'react-router';

const ShowBlog = () => {
  const [blog, setBlog] = useState({});
  const param = useParams();

  async function fetchBlog() {
    try {
      const res = await getBlogById(param.id)
      console.log(res)
      if(res.success){
        setBlog(res.data);
      }
    } catch (error) {
      alert(error.response.data.message || "Something went wrong");
    }
  }

  useEffect(() => {
    fetchBlog();
  }, [])

  return (
    <div className='max-w-[662px] mx-auto' id='blog-content'>
      {/* header */}
      <div></div>
      <div dangerouslySetInnerHTML={{__html: blog.content}} ></div>
    </div>
  )
}

export default ShowBlog