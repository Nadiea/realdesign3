import React from 'react';
import image from "/src/assets/download.jpg"

export default function Ourteam() {
  return (
    <div className=' items-center  font-poppins  ml-16  ' >
      <h1 className=' m-5 p-5   font-mono  text-2xl font-bold '>Our team</h1>
      <div className='grid grid-cols-2 lg:grid-cols-2 w-full h-screen'>


  <div className='bg-white items-center lg:mb-4 mb-8'>
    <div className='flex-row lg:relative'>
      <img className='h-40  lg:h-72 rounded-3xl object-cover' src={image} alt="City Skyline" />
      <div className='lg:mb-4 mb-8 text-sm lg:text-lg absolute h-40  w-52  font-sm lg:w-56 font-poppins lg:h-72 bg-slate-200 rounded-3xl items-center p-5 lg:top-0 lg:left-40'>
        With breathtaking views of the city skyline and meticulous attention to detail, our elegantly designed rooms and suites provide a haven of tranquility.
      </div>
    </div>
  </div>

  <div className='bg-white items-center lg:mb-4 mb-8'>
    <div className='flex-row lg:relative'>
      <img className='h-40  lg:h-72 rounded-3xl object-cover' src={image} alt="City Skyline" />
      <div className='lg:mb-4 mb-8 text-sm lg:text-lg absolute h-40  w-52  font-sm lg:w-56 font-poppins lg:h-72 bg-slate-200 rounded-3xl items-center p-5 lg:top-0 lg:left-40'>
        With breathtaking views of the city skyline and meticulous attention to detail, our elegantly designed rooms and suites provide a haven of tranquility.
      </div>
    </div>
  </div>
  <div className='bg-white items-center lg:mb-4 mb-8'>
    <div className='flex-row lg:relative'>
      <img className='h-40  lg:h-72 mt-5 rounded-3xl object-cover' src={image} alt="City Skyline" />
      <div className='lg:mb-4 mb-8 text-sm lg:text-lg absolute h-40  w-52  font-sm lg:w-56 font-poppins lg:h-72 bg-slate-200 rounded-3xl items-center p-5 lg:top-0 lg:left-40'>
        With breathtaking views of the city skyline and meticulous attention to detail, our elegantly designed rooms and suites provide a haven of tranquility.
      </div>
    </div>
  </div>
  <div className='bg-white items-center lg:mb-4 mb-8'>
    <div className='flex-row lg:relative'>
      <img className='h-40  lg:h-72 mt-5 rounded-3xl object-cover' src={image} alt="City Skyline" />
      <div className='lg:mb-4 mb-8  text-sm lg:text-lg absolute h-40  w-52  font-sm lg:w-56 font-poppins lg:h-72 bg-slate-200 rounded-3xl items-center p-5 lg:top-0 lg:left-40'>
        With breathtaking views of the city skyline and meticulous attention to detail, our elegantly designed rooms and suites provide a haven of tranquility.
      </div>
    </div>
  </div>
</div>


    </div>
  );
}
