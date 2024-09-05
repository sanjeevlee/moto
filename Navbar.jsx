import React, {  useEffect,useState } from 'react';
import jsonData from './home.json';
import './Navbar.css';



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navbarItemList = jsonData.navbarItemList;
    return (
        <> 
    <div className="body">
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
      </div></>
    );
};

export default Navbar;