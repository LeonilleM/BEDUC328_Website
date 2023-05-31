import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../Assets/UW_White_Logo.svg';
import AboutIcon from '../Assets/Icons/about_icon.svg';
import HomeIcon from '../Assets/Icons/home_icon.svg';
import ArrowIcon from '../Assets/Icons/arrow_icon.svg';
import ResourceIcon from '../Assets/Icons/resource_icon.svg';


function MobileNavBar() {
  const location = useLocation();

  const getCurrentPathname = () => {
    return location.pathname;
  }

  const isHomeActive = getCurrentPathname() === '/';
  const isAboutActive = getCurrentPathname() === '/about';
  const isResourceActive = getCurrentPathname() === '/resource';

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
 
  return (
    <div>
    {/* Mobile Menu */}
    <section className="sm:hidden ease-in duration-150 ">
      <button
        className="fixed top-0 left-0 z-50 flex items-center px-4 w-screen h-11 text-uw-purple"
        onClick={toggleDropdown}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 transform rotate-90 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-gray-800 opacity-50 z-40 transition-opacity duration-200"
          onClick={toggleDropdown}
        />
      )}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-uw-purple transform transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="py-4 overflow-y-auto">
        <div className="flex items-center mb-4 px-3 pt-4">
            <img src={Logo} alt="UW Logo" className="w-32 mr-2" />
            <h1 className="text-white text-[18px] font-thin ">
              School to Prison Pipeline Issue
            </h1>
          </div>
          <ul className="space-y-2 font-medium pt-4">
            <li className="group">
              <Link
                to="/about"
                className={`flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative ${isAboutActive ? 'bg-black/40' : ''
                  }`}
              >
                <span className="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={AboutIcon} alt="About Icon" className="w-8 mr-2 mx-2" />
                About
              </Link>
            </li>
            <li className="group">
              <HashLink
                to={isHomeActive ? '/#home-section' : '/'}
                smooth={true}
                className={`flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative ${isHomeActive ? 'bg-black/40' : ''
                  }`}
              >
                <span className="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={HomeIcon} alt="Home Icon" className="w-8 mr-2 mx-2" />
                Home
              </HashLink>
            </li>
            <li className="group">
              <HashLink
                to="/#cause-section"
                smooth={true}
                className="flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative"
              >
                <span className="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={ArrowIcon} alt="Arrow Icon" className="w-8 mr-2 mx-2" />
                Cause
              </HashLink>
            </li>
            <li className="group">
              <HashLink
                to="/#action-section"
                smooth={true}
                className="flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative"
              >
                <span className="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={ArrowIcon} alt="Arrow Icon" className="w-8 mr-2 mx-2" />
                Action
              </HashLink>
            </li>
            <li className="group">
              <Link
                to="/resource"
                className={`flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative ${isResourceActive ? 'bg-black/40' : ''
                  }`}
              >
                <span className="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={ResourceIcon} alt="Resource Icon" className="w-8 mr-2 mx-2" />
                Resource
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
    
  )
}

export default MobileNavBar