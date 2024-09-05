

import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img 
          src="./images/about-img.png" 
          alt="Delicious food" 
          className="about-image" 
        />
      </div>
      <div className="text-container">
        <h2>About Us</h2>
        <p>
        Content here, content here', making it look like readable English. Many desktop publishing packages and web page
         editors now use Lorem Ipsum as their default model text, and a search for Content here, content here', making it 
         look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
        </p>
        <button className="search"><a href="#">Read More</a></button>
      </div>
    </div>
  );
};

export default AboutUs;
