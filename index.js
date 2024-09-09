
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Signin';
import Signup from './Signup';
import AboutUs from './Aboutus';
import Service from './Service';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/Service" element={<Service/>} />
        <Route path="/Contact" element={<Contact/>} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();