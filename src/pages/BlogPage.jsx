import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data } from '../assets/assets';
import NavBar from '../components/NavBar';
import moment from 'moment';

const BlogPage = () => {

  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData= async () => {
   const blogItem= blog_data.find(item => item._id === id)
    
    setData(blogItem);
  }

  useEffect(() => {
    fetchBlogData();
  },[])


  return data ? (
    <div className='relative'>
      <img src={assets.gradientBackground} alt='background image' className='absolute -top-50 -z-1 opacity-50' />
      <NavBar />
      
      <div>
        <p>Published on {moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <h1>{data.title }</h1>
        <h2>{data.subTitle}</h2>
        <p>Michael Brown</p>
      </div>

      
      <div></div>
    </div>


  ) : <div>
      Loading....
  </div>
}

export default BlogPage