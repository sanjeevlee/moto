
import React, { useState } from "react";
import { Container, Button, Navbar, Nav, Offcanvas } from "react-bootstrap";
import jsonData from './home.json';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbr= () => {
  const navbarItemList = jsonData.navbarItemList;
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
 <>   <div className="body">
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
                        <Link
                          to={item.url}
                          className={`text-lg px-2 font-bold text-[rgb(40_40_39)] hover:text-[rgb(228_46_12)] navb ${
                            location.pathname === item.url ? 'text-red-500' : ''
                          }`}
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
        <Offcanvas.Header closeButton className="focus:outline-none p-4 close">
          
        </Offcanvas.Header>
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
    </div></div></div></>
  );
};

export default Navbr;
