import React, { useState } from 'react';

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
    {/* Mobile Menu */}
    <div className="sm:hidden">
      <button
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-12 h-12 text-black"
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
          className="fixed top-0 left-0 w-full h-screen bg-gray-800 opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleDropdown}
        />
      )}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-white transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="py-4 overflow-y-auto">
          <div className="flex items-center mb-4 px-3">
            <h1 className="text-black text-xl font-extralight font-sans">School to Prison Pipeline</h1>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="block p-3 text-black transition duration-150 ease-in-out rounded-md hover:bg-slate-200 hover:text-black"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 text-black transition duration-150 ease-in-out rounded-md hover:bg-slate-200 hover:text-black"
              >
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 text-black transition duration-150 ease-in-out rounded-md hover:bg-slate-200 hover:text-black"
              >
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default MobileNavBar