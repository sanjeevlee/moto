
import React from 'react';
import './AboutUs.css';
import './Footer.css';
import  {  useEffect,useState } from 'react';
import jsonData from './home.json';
import { FaLinkedinIn, FaYoutube, } from 'react-icons/fa';
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const AboutUs = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbarItemList = jsonData.navbarItemList;
  return (
    <> 
    <div className="body">
    <div className="backclr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sticky top-0">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-4xl pt-3 font-extrabold text-[rgb(228_46_12)]">MOTO</a>
            </div>
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
              hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg className="h-10 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {showMenu ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          <nav className="hidden mr-2 mt-4 sm:flex pl-32 pt-1 sticky top-0">
            {navbarItemList.map((item, index) => (
              <React.Fragment key={item.id}>
                <a 
                  href={item.url} 
                  className="text-lg px-2 font-bold text-[rgb(40_40_39)] hover:text-[rgb(228_46_12)] navb"
                >
                  {item.label}
                </a>
                {item.label === "SIGN IN" && (
                  <span className=" text-lg text-[rgb(40_40_39)]">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
      

      {/* {/ Mobile Menu /} */}
      <nav 
        className={`sm:hidden fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between p-4">
          <button 
            onClick={() => setShowMenu(false)} 
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M6 18L18 6M6 6l12 12" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-4 px-4">
          {navbarItemList.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-lg font-bold text-[rgb(40_40_39)] hover:text-[rgb(228_46_12)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav> 
      </div>
     
    <div>
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
          <button className="readmore1"><a href="#">Read More</a></button>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <div className="footer-container about1">
          {/* About Section */}
          <div className="footer-section about">
            <h2>ABOUT</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            </p>
          </div>

          {/* Links Section */}
          <div className="footer-section links1">
            <h2>LINKS</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Software</a></li>
              <li><a href="#">Company</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Testimonial</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-section social">
            <h2>FOLLOW US</h2>
            <ul className="social-icons">
              <li>
                <a href="#" aria-label="Facebook">
                  <MdOutlineFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <AiFillTwitterCircle /> Twitter
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin /> Linkedin
                </a>
              </li>
              <li>
                <a href="#" aria-label="YouTube">
                  <FaYoutube /> YouTube
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <AiFillInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section newsletter">
            <h2>NEWSLETTER</h2>
            <form action="#">
              <textarea 
                className="update_mail" 
                placeholder="Enter Your Email" 
                rows="5" 
                id="comment" 
                name="Enter Your Email"
              />
              <div className="subscribe_bt"><a href="#">Subscribe</a></div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>2024 All Rights Reserved. Design by E.K.Sanjeev.</p>
        </div>
      </footer>
    </div>
    </div></>
  );
};

export default AboutUs;
