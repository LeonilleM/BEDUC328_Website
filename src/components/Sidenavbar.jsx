import React, { useState } from 'react';

function Sidenavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Desktop Menu */}
      <aside className="hidden sm:block fixed top-0 left-0 z-40 w-64 h-screen transition-transform translate-x-full sm:translate-x-0 bg-white" aria-label="Sidebar">
        <div className="h-full py-4 overflow-y-auto">
          <div className="flex items-center mb-4 px-3">
            <h1 className="text-black text-xl font-extralight font-sans">School to Prison Pipeline</h1>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="block p-3 text-black transition duration-150 ease-in-out rounded-md hover:bg-slate-200 hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 text-black transition duration-150 ease-in-out rounded-md hover:bg-slate-200 hover:text-black">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 text-black transition duration-150 ease-in-out rounded-md hover:bg-slate-200 hover:text-black">
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidenavbar;
