import React, { useEffect, useState } from 'react'
import { getBlogById } from '../api/blogs'
import { useParams } from 'react-router';
import formatDate from '../utils/formatDate';

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
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-white mr-3">
          {blog.author?.fullName[0]}
        </div>
        <div>
          <p className="text-sm font-semibold">
            {blog.author?.fullName}
          </p>
          <p className="text-xs text-gray-500">{formatDate(blog.createdAt)}</p>
        </div>
      </div>
      <h1><b>{blog.title}</b></h1>
      <div dangerouslySetInnerHTML={{__html: blog.content}} ></div>
    </div>
  )
}

export default ShowBlog