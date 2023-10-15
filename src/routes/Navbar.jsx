import React, { useState } from 'react';

export default function Navbar() {
  const [toggledropdown, setToggleDropdown] = useState(false);

  const toggleDropdown = () => {
    setToggleDropdown(!toggledropdown);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex font-bold text-base">
          <span className="text-blue-500">REAL ESTATE</span>
          <span className="font-extrabold">EXPERT</span>
        </div>

        <div className="hidden md:flex  space-x-5 font-bold">
          <a href="/home" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About us</a>
          <a href="#" className="hover:text-blue-500">Contact us</a>
          <a href="#" className="hover:text-blue-500">Review</a>
        </div>

        <div className="flex items-center space-x-2">
          <button
            className="h-8 border p-4 border-black font-bold flex justify-center items-center font-poppins rounded-full text-xs bg-white"
            onClick={toggleDropdown}
          >
            TO CONSULT
          </button>
          
          <div className={`md:hidden ${toggledropdown ? 'block mt-11' : 'hidden'}`}>
          
            <a href="/home" className="block hover:text-blue-500">Home</a>
            <a href="#" className="block hover:text-blue-500">About us</a>
            <a href="#" className="block hover:text-blue-500">Contact us</a>
            <a href="#" className="block hover:text-blue-500">Review</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
