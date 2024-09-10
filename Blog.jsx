import React from 'react';
import './Blog.css';
import jsonData from './home.json'; 
import Navbr from './Navbar';
import Footer from './Footer';

const Blog = () => {
  return (
    <> 
   <Navbr/>
  <div className="blog-container">
  <h1 className='title'>CAFES & RESTAURANTS</h1>
  <p class="blog_text"> search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
    <div className="restaurants-grid">
    {jsonData.Blog.burger.slice(0, 6).map((blog, index) => (
      <div className="restaurant-card" key={index}>
        <img src={blog.image} alt={blog.title} />
        <h4 className='btext'>{blog.title}</h4>
        <h6 className='dtext'>{blog.date}</h6>
        <h6 className='htext'>{blog.hours}</h6>
        <p className='ltext'>{blog.description}</p>
      </div>
    ))}
  </div>
  {/* <div class="seemore_bt"><a href="#">See More</a></div> */}
</div>

    <Footer/></>
  );
};

export default Blog;
