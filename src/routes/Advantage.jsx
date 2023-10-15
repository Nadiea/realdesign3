import React, { useState, useEffect } from 'react';
import image from '../assets/minimalist-living-room-ideas-5213203-hero-d27f8dcfa0b84706adbbd28ea0e1b48d.jpg';

export default function Advantage() {
  const items = [
    
    "With breathtaking views of the city skyline and meticulous attention to detail, our elegantly designed rooms and suites provide a haven of tranquility.",
    "Another advantage description goes here.",
    "Yet another advantage description.",
    "And the last advantage description.",
    "And the last disadvantage description.",
    "Another advantage description goes here.",
    "Yet another advantage description.",
    "And the last advantage description.",
    "And the last disadvantage description.",
    "Yet another advantage description.",
    "And the last advantage description.",
    "And the last disadvantage description."
  ];

  const itemsPerPage = window.innerWidth < 768 ? 1 : 4;

  const [currentPage, setCurrentPage] = useState(0);



  const [pagechange, setpagechange] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(items.length / itemsPerPage));
    }, 3000);

    setpagechange(id);

    return () => clearInterval(id);
  }, [items.length]);

  const handlePrev = () => {
    clearInterval(pagechange);
    setCurrentPage((prevPage) => (prevPage - 1 + Math.ceil(items.length / itemsPerPage)) % Math.ceil(items.length / itemsPerPage));
  };

  const handleNext = () => {
    clearInterval(pagechange);
    setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(items.length / itemsPerPage));
  };

  const renderItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex).map((item, index) => (
      <div
      key={index}
      className={`p-4 sm:p-8 flex flex-col rounded-3xl bg-gray-950 h-auto sm:h-64 w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-2/6 text-center sm:text-left text-slate-400 relative`}
    >
      <svg
        className="h-8 w-8 mb-2 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
      {item}
      <div className={`absolute -top-2 -right-3 bg-white w-10 h-10 flex justify-center items-center rounded-full text-black font-bold`}>
        {index + 1 + currentPage * itemsPerPage}
      </div>
    </div>
    
    ));
  };

  return (
    <div className="p-8 container">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold ml-10 font-mono">Our Advantage</div>
        <div className="flex gap-2">
          <button onClick={handlePrev}>
            <svg
              className="h-8 w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 8 8 12 12 16" />
              <line x1="16" y1="12" x2="8" y2="12" />
            </svg>
          </button>
          <button onClick={handleNext}>
            <svg
              className="h-8 w-8 text-red-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 16 16 12 12 8" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex  justify-between gap-3 pl-10 mb-10 mt-10">
        {renderItems()}
      </div>
      
      <div className='flex justify-center items-center pl-10'>
        <img
          className="h-72 w-screen rounded-3xl object-cover"
          src={image}
          alt="Apartment"
        />
      </div>
    </div>
  );
}
