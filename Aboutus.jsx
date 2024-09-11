
import React from 'react';
import './AboutUs.css';
// import './Footer.css';
import  {  useEffect,useState } from 'react';
import { Container, Button, Navbar, Nav, Offcanvas } from "react-bootstrap";
import jsonData from './home.json';
import { useNavigate } from "react-router-dom";
import { FaLinkedinIn, FaYoutube, } from 'react-icons/fa';
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Navbr from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbarItemList = jsonData.navbarItemList;
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
    <> 
   <Navbr/>
     
   
      {/* About Us Section */}
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
         
        </div>
      </div>

      {/* Footer Section */}
   <Footer/>
    
    </>
  );
};

export default AboutUs;
