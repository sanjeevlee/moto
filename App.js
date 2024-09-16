import Project from './moto';
import './App.css';
import AboutUs from './Aboutus';
import Service from './Service';
import Contact from './Contact';
import SignIn from './Signin';
import Signup from './Signup';
import './Signup.css';
import  Footer from './Footer';
// import './Navbar.css';
import Navbr from './Navbar';

import Blog from './Blog';
import TestimonialCarousel from './Carosal';
import LoginPage from './Admin';
import Dashboard from './Dashboard';
import Addusers from './Adduser';


function App() {
  return (
    <div className="App">
      <header className="App-header">
     {/* <Project/>  */}
     {/* <AboutUs/> */}
     {/* <Service/> */}
     {/* <Contact/> */}
     {/* <Signup/> */}
     {/* <SignIn/> */}
     {/* < Footer/> */}
    {/* <Navbr/> */}
    {/* <Blog/> */}
   {/* <TestimonialCarousel/> */}
     {/* <RegisterForm/> */}
     {/* <LoginPage/> */}
     <Dashboard />
     {/* <Addusers/> */}
      </header>
    </div>
  );
}

export default App;
