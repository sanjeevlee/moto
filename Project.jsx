// export default Project;
import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import jsonData from './home.json';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';

const Project = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbarItemList = jsonData.navbarItemList;
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
    <>
      <div className="body">
        <div className="background">
          <div className="navebar">
            <Navbar expand="lg" className="px-3 navbar-custom">
              <Container>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="/" className="text-4xl font-extrabold text-[rgb(228_46_12)]">MOTO</a>
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
                    width="28"
                    height="28"
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
    {navbarItemList.map((item, index) => (
      <React.Fragment key={item.id}>
        <Link
          to={item.url}
          className={`text-lg px-2 font-bold text-[rgb(40_40_39)] hover:text-[rgb(228_46_12)] navb ${
            location.pathname === item.url ? 'text-red-500' : ''
          } ${item.label === 'CONTACT' ? 'mr-[15px]' : ''}`}
        >
          {item.label}
        </Link>
        {item.label === 'SIGN IN' && (
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
              <Offcanvas.Header closeButton className="focus:outline-none p-4 close"></Offcanvas.Header>
              <Offcanvas.Body>
                {navbarItemList.map((item) => (
                  <React.Fragment key={item.id}>
                    <Link
                      to={item.url}
                      className={`text-lg px-2 font-bold text-[rgb(40_40_39)] hover:text-[rgb(228_46_12)] navb ${
                        location.pathname === item.url ? 'text-[rgb(228_46_12)]' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.label === 'SIGN IN' && (
                      <span className="text-lg text-[rgb(40_40_39)] spans">|</span>
                    )}
                  </React.Fragment>
                ))}
              </Offcanvas.Body>
            </Offcanvas>
          </div>

          {/* Banner Section */}
          <div className="bannerone">
            <div className="anime w-full h-64 bg-cover bg-center"></div>
            <div className="search">
              <h1 className="banner_taital">Food Delivery</h1>
              <p className="banner_text">Search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>

              <div className="dropdowns">
                <select className="dropdown1">
                  <option className="option">City</option>
                  <option className="option">Peelamedu</option>
                  <option className="option">Fun Mall</option>
                  <option className="option">Nava India</option>
                </select>
                <select className="dropdown2">
                  <option value="option">Restaurant</option>
                  <option value="option">HariBhavan</option>
                  <option value="option">SMS</option>
                  <option value="option">Ariya</option>
                </select>
                <select className="dropdown2">
                  <option value="option">Food</option>
                  <option value="option">Under $10</option>
                  <option value="option">$10-$20</option>
                  <option value="option">Over $20</option>
                </select>
              </div>
              <div className="search_btn">
                <a href="#">Search Now</a>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Goods Foods Section */}
        <Container className="my-5">
          <div className="banner2">
            <h2 className="text mb-4 ">Popular Goods Foods</h2>
            <p className="text mb-5 para">
              Search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </p>

            <Row className="justify-content mb-4 foodss " >
              {jsonData.foods.categories.map((category, index) => (
                <Col key={index} xs={6} sm={6} md={2} className="text-center mb-2 service">
                  <div className={`category ${category === 'Biryani & Meat' ? 'active' : ''}`}>
                    {category}
                  </div>
                </Col>
              ))}
            </Row>

            <Row className='ba'>
              {jsonData.foods.foods.map((food, index) => (
                <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-4 cards">
                  <Card className="h-100">
                    <Card.Img variant="top" src={food.image} alt={food.name} className="card-img-top images" />
                    <Card.Body className="d-flex flex-column cardbody">
                      <Card.Title>{food.name}</Card.Title>
                      <Card.Text className="text">{food.description}</Card.Text>
                      <div className="readmore">
                        <a href="/Service">Read More</a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>

        {/* About Section */}
        <div className="about-container">
          <div className="image-container">
            <img src="./images/about-img.png" alt="Delicious food" className="about-image" />
          </div>
          <div className="text-container">
            <h2>About Us</h2>
            <p>
            Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a search for Content here, content here', making it 
            look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
            </p>
            <button className="readmore1">
              <a href="/Aboutus">Read More</a>
            </button>
          </div>
        </div>
        {/* blog */}
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
  <div class="seemore_bt"><a href="/Blog">See More</a></div>
</div>
{/* carosal */}
<div className="testimonial-container">
        <h6 class="testimonial_taital">Testimonial</h6>
      <h2 className="testimonial-title">WHY OUR CLIENTS CHOOSE US</h2>
      <Carousel indicators={true} controls={false} interval={1000}>
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="testimonial-slide">
            <img
              className="d-block testimonial-image"
              src=".\images\client-img.png"
              alt="Henrry Jo"
            />
            <div className="client_box">
            <h3 className="testimonial-name">Henrry Jo</h3>
            <p className="testimonial-subtitle">(long established)</p>
            <p className="testimonial-text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
            </p></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonial-slide">
            <img
              className="d-block testimonial-image"
              src=".\images\client-img.png"
              alt="Henrry Jo"
            />
            <div className="client_box">
            <h3 className="testimonial-name">Henrry Jo</h3>
            <p className="testimonial-subtitle">(long established)</p>
            <p className="testimonial-text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
            </p></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonial-slide">
            <img
              className="d-block testimonial-image"
              src=".\images\client-img.png"
              alt="Henrry Jo"
            />
            <div className="client_box">
            <h3 className="testimonial-name">Henrry Jo</h3>
            <p className="testimonial-subtitle">(long established)</p>
            <p className="testimonial-text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
            </p></div>
          </div>
        </Carousel.Item>
      
      </Carousel>
    </div>
    <Footer/>
      </div>
    </>
  );
};

export default Project;

