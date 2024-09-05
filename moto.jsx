// export default Project;
import React, {  useEffect,useState } from 'react';
import jsonData from './home.json';
import { BsPersonFill, BsChevronRight } from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Card, Button } from 'react-bootstrap';
import foodData from './foods.json';


const Project = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbarItemList = jsonData.navbarItemList;
  const { categories, foods } = foodData;

  return (
   <> 
    <div className="body">
      <div className="background">
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

    
{/* Banner Section */}
               <div className="bannerone">
               <div className="anime" w-full h-64 bg-cover bg-center></div>
               <div className="search">
               <h1 className="banner_taital">Food Delivery</h1>
               <p className="banner_text">Search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            
                <div className="dropdowns">
                <select className="dropdown1">
                <option className="option">city</option>
                <option className="option">Peelamedu</option>
                <option className="option">Fun Mall</option>
                <option className="option">Nava India</option>
                </select>
                <select className="dropdown">
                <option value="option">restaurent</option>
                <option value="option">HariBhavan</option>
                <option value="option">SMS</option>
                <option value="option">Ariya</option>
                </select>
                <select className="dropdown">
                <option value="option">food</option>
                <option value="option">Under $10</option>
                <option value="option">$10-$20</option>
                <option value="option">Over $20</option>
                </select>
                </div>
                <div className="search_btn"><a href="#">Search Now</a></div>
                </div>
                </div>
                </div>
                
{/* // end of first container */}

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
        Content here, content here', making it look like readable English.
         Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
        </p>
        <button className="readmore1"><a href="#">Read More</a></button>
      </div>
    </div>
    </div>
</>

  );
};

export default Project;
