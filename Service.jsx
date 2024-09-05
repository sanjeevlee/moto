import React, {  useEffect,useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import jsonData from './home.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import foodData from './foods.json';
import './Service.css';
import './Footer.css';
import { FaLinkedinIn, FaYoutube,} from 'react-icons/fa';
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";





const Service = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbarItemList = jsonData.navbarItemList;
const { categories, foods } = foodData;

return (
    <><div className="body">
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
      </div>
<Container className="my-5">
  <div className="banner2">
        <h2 className="text mb-4">Popular Goods Foods</h2>
        <p className="text mb-5 para">
          Search for 'lorem ipsum' will uncover many web sites still in their infancy.
        </p>

       
        <Row className="justify-content mb-4">
               {categories.map((category, index) => (
               <Col key={index} xs={6} sm={8}  md={2}  className="text-center mb-2 service">
               <div className={` category === "Biryani & Meat" ? "active" : "" }`} >
                {category}
               </div>
               </Col>
              ))}
        </Row>

      
        <Row>
          {foods.map((food, index) => (
            
               <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-4  cards">

                <Card className="h-100 ">
                <Card.Img variant="top" src={food.image} alt={food.name} className="card-img-top images" />
                <Card.Body className="d-flex flex-column cardbody">
                <Card.Title>{food.name}</Card.Title>
                <Card.Text className="text">
                        {food.description}
                </Card.Text>
                <div className="readmore"><a href="#">Read More</a></div>
                </Card.Body>
                </Card>               
                </Col>
          ))}
        </Row>
          </div>
        
      </Container>
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
           <textarea class="update_mail" placeholder="Enter Your Email" rows="5" id="comment" name="Enter Your Email"></textarea>
             <div class="subscribe_bt"><a href="#">Subscribe</a></div>
           </form>
         </div>
       </div>
 
       {/* Footer Bottom */}
       <div className="footer-bottom">
         <p>2023 All Rights Reserved. Design by Free HTML Templates</p>
       </div>
     </footer></>
        );
    };
    export default Service;