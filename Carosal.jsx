import React from "react";
import { Carousel } from "react-bootstrap";
import "./TestimonialCarousel.css";
import Footer from "./Footer";

const TestimonialCarousel = () => {
  return (
   <> <div className="testimonial-container">
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
    <Footer/></>
  );
};

export default TestimonialCarousel;
