// src/components/Footer.jsx

import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaYoutube,} from 'react-icons/fa';
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
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
    </footer>
  );
};

export default Footer;
