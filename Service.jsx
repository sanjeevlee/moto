import React, {  useEffect,useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import {  Navbar, Nav, Offcanvas } from "react-bootstrap";
import jsonData from './home.json';
import { useNavigate } from "react-router-dom";
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
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

const { categories, foods } = foodData;

return (
    <>
    <div className="body">
    <div className="backclr">
    <div className="navebar">
      <Navbar expand="lg" className="px-3 navbar-custom">
        <Container>
        <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <a href="/" className="text-4xl  font-extrabold text-[rgb(228_46_12)]">MOTO</a>
              </div>
            </div>

          {/* Hamburger Toggle Button */}
          <Button
            variant="outline-secondary"
            onClick={handleOffcanvasShow}
            id="hamburger-button"
            className="three"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {navbarItemList.map((item) => (
                <React.Fragment key={item.id}>
                  <a
                    href={item.url}
                    className="text-lg px-2 font-bold text-[rgb(40_40_39)] hover:text-[rgb(228_46_12)] navb"
                  >
                    {item.label}
                  </a>
                  {item.label === "SIGN IN" && (
                    <span className="text-lg text-[rgb(40_40_39)]">|</span>
                  )}
                </React.Fragment>
              ))}

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleOffcanvasClose}
        placement="end"
        id="offcanvasstyle"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton className="focus:outline-none p-4 close">
          
        </Offcanvas.Header>
        <Offcanvas.Body>
          {navbarItemList.map((item) => (
            <React.Fragment key={item.id}>
              <a
                href={item.url}
                className="text-lg px-2 font-bold text-[rgb(40_40_39)] hover:text-[rgb(228_46_12)] navb"
              >
                {item.label}
              </a>
              {item.label === "SIGN IN" && (
                <span className="text-lg text-[rgb(40_40_39)] spans">|</span>
              )}
            </React.Fragment>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div></div>
      
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
         <p>2024 All Rights Reserved. Design by E.K.Sanjeev.</p>
       </div>
     </footer>
     </div>   </>
        );
    };
    export default Service;