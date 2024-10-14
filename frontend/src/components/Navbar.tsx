import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">MyApp</div>

        {/* Menu items (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-300">Home</a>
          <a href="#" className="hover:text-blue-300">About</a>
          <a href="#" className="hover:text-blue-300">Services</a>
          <a href="#" className="hover:text-blue-300">Contact</a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu items (Mobile) */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
          <a href="#" className="block py-2 hover:text-blue-300">Home</a>
          <a href="#" className="block py-2 hover:text-blue-300">About</a>
          <a href="#" className="block py-2 hover:text-blue-300">Services</a>
          <a href="#" className="block py-2 hover:text-blue-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
