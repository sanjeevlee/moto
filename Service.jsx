import React, {  useEffect,useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import {  Navbar, Nav, Offcanvas } from "react-bootstrap";
import jsonData from './home.json';
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import foodData from './foods.json';
import './Service.css';
import './Footer.css';
import { FaLinkedinIn, FaYoutube,} from 'react-icons/fa';
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Navbr from './Navbar';
import Footer from './Footer';





const Service = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbarItemList = jsonData.navbarItemList;
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

// const { categories, foods } = foodData;

return (
    <>
    <Navbr/>
      
<Container className="my-5">
  <div className="banner2">
        <h2 className="text mb-4">Popular Goods Foods</h2>
        <p className="text mb-5 para">
          Search for 'lorem ipsum' will uncover many web sites still in their infancy.
        </p>

       
       
        <Row className="justify-content mb-4">
              {jsonData.foods.categories.map((category, index) => (
                <Col key={index} xs={6} sm={2} md={2} className="text-center mb-2 service">
                  <div className={`category ${category === 'Biryani & Meat' ? 'active' : ''}`}>
                    {category}
                  </div>
                </Col>
              ))}
            </Row>

            <Row>
              {jsonData.foods.foods.map((food, index) => (
                <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-4 cards">
                  <Card className="h-100">
                    <Card.Img variant="top" src={food.image} alt={food.name} className="card-img-top images" />
                    <Card.Body className="d-flex flex-column cardbody">
                      <Card.Title>{food.name}</Card.Title>
                      <Card.Text className="text">{food.description}</Card.Text>
                      <div className="readmore">
                        <a href="#">Read More</a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        
      </Container>
 <Footer/>
      </>
        );
    };
    export default Service;