import React, { useState } from 'react';

import {Link} from 'react-router-dom';

// Imports for Icons and Logos
import Logo from '../Assets/UW_White_Logo.svg';
import AboutIcon from  '../Assets/Icons/about_icon.svg';
import HomeIcon from '../Assets/Icons/home_icon.svg';
import ArrowIcon from '../Assets/Icons/arrow_icon.svg';
import ResourceIcon from '../Assets/Icons/resource_icon.svg';

function Sidenavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Desktop Menu */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0 sm:w-64 bg-uw-purple`}
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto">
          <div className="flex items-center mb-4 px-3 pt-4">
            <img src={Logo} alt="UW Logo" className="w-32 mr-2" />
            <h1 className="text-white text-[18px] font-thin ">
              School to Prison Pipeline Issue
            </h1>
          </div>
          <ul className="space-y-2 font-medium pt-4">
            <li class="group">
              <Link to="/about" class="flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative">
                <span class="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={AboutIcon} alt="Home Icon" className="w-8 mr-2 mx-2" />
                About
              </Link>
            </li>
            <li class="group">
              <Link to="/" class="flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative">
                <span class="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={HomeIcon} alt="Home Icon" className="w-8 mr-2 mx-2" />
                Home
              </Link>
            </li>
            <li class="group">
              <a href="#" class="flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative">
                <span class="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={ArrowIcon} alt="Home Icon" className="w-8 mr-2 mx-2" />
                Cause
              </a>
            </li>
            <li class="group">
              <a href="#" class="flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative">
                <span class="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={ArrowIcon} alt="Home Icon" className="w-8 mr-2 mx-2" />
                Action
              </a>
            </li>
            <li class="group">
              <a href="#" class="flex p-3 pl-6 text-white text-xl transition duration-150 ease-in-out hover:bg-black/40 relative">
                <span class="group-hover:opacity-100 opacity-0 absolute left-0 top-0 h-full w-2 bg-black"></span>
                <img src={ResourceIcon} alt="Home Icon" className="w-8 mr-2 mx-2" />
                Resource
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidenavbar;
