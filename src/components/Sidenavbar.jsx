import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../Assets/UW_White_Logo.svg';
import AboutIcon from '../Assets/Icons/about_icon.svg';
import HomeIcon from '../Assets/Icons/home_icon.svg';
import ArrowIcon from '../Assets/Icons/arrow_icon.svg';
import ResourceIcon from '../Assets/Icons/resource_icon.svg';

function Sidenavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getCurrentPathname = () => {
    return location.pathname;
  };

  const isHomeActive = getCurrentPathname() === '/';
  const isAboutActive = getCurrentPathname() === '/about';
  const isResourceActive = getCurrentPathname() === '/resource';

  useEffect(() => {
    const handleScroll = () => {
      if (isHomeActive) {
        const homeSection = document.getElementById('home-section');
        const causeSection = document.getElementById('cause-section');
        const actionSection = document.getElementById('action-section');
        const scrollPosition = window.scrollY;
        if (scrollPosition < (homeSection?.offsetTop || 0)) {
          setActiveTab('/');
        } else if (scrollPosition >= (homeSection?.offsetTop || 0) && scrollPosition < (causeSection?.offsetTop || 0)) {
          setActiveTab('#home-section');
        } else if (scrollPosition >= (causeSection?.offsetTop || 0) && scrollPosition < (actionSection?.offsetTop || 0)) {
          setActiveTab('#cause-section');
        } else {
          setActiveTab('#action-section');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomeActive]);


  return (
    <div>
      {/* Desktop Menu */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transform transition-transform ease-in-out duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:w-64 bg-uw-purple`}
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto">
          <div className="flex items-center mb-4 px-3 pt-4">
            <img src={Logo} alt="UW Logo" className="w-32 mr-2" />
            <h1 className="text-white text-[18px] font-thin">School to Prison Pipeline Issue</h1>
          </div>
          <ul className="space-y-2 font-medium pt-4">
            <li className="group">
              <Link
                to="/about"
                className={`flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative ${
                  isAboutActive ? 'before:absolute before:inset-0 before:border-l-8 before:border-transparent before:border-white bg-uw-gold' : ''
                }`}
              >
                <span className="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={AboutIcon} alt="About Icon" className="w-8 mr-2 mx-2" />
                About
              </Link>
            </li>
            <li className="group">
              <HashLink
                to="/#home-section"
                smooth={true}
                className={`flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40  relative ${
                  activeTab === '#home-section' ? 'before:absolute before:inset-0 before:border-l-8 before:border-transparent before:border-white bg-uw-gold' : ''
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
                className={`flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative ${
                  activeTab === '#cause-section' ? 'before:absolute before:inset-0 before:border-l-8 before:border-transparent before:border-white bg-uw-gold' : ''
                }`}
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
                className={`flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative ${
                  activeTab === '#action-section' ? 'before:absolute before:inset-0 before:border-l-8 before:border-transparent before:border-white bg-uw-gold' : ''
                }`}
              >
                <span className="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={ArrowIcon} alt="Arrow Icon" className="w-8 mr-2 mx-2" />
                Action
              </HashLink>
            </li>
            <li className="group">
              <Link
                to="/resource"
                className={`flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative ${
                  isResourceActive ? 'before:absolute before:inset-0 before:border-l-8 before:border-transparent before:border-white bg-uw-gold' : ''
                }`}
              >
                <span className="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={ResourceIcon} alt="Resource Icon" className="w-8 mr-2 mx-2" />
                Resource
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidenavbar;
