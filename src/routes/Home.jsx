import React from "react";
import Number from "./Number";
import image from "../assets/Harmonious-living-room-in-rental-apartment-at-Abbington-Crossing-via-RentCafe.webp";
import Catalog from "./Catalog";
import Advantage from "./Advantage";
// import Ourteam from "./Ourteam";
// import FAQ from "./FAQ";

export default function Home() {
  return (
    <>
      <div className="bg-white border p-20  flex flex-col justify-center items-center font-serif ">
        <div className="text-center font-serif text-blue-900 font-semibold text-3xl lg:text-5xl ">
          WELCOME TO OUR COMPANY
        </div>
        <div className="text-center font-serif text-3xl lg:text-4xl mt-1">
          INTROVERT TECHNOLOGY!!!
        </div>
        <div className="text-center font-serif text-sm font-semibold mt-2 lg:mt-2 ">
          We will help you find your ideal own apartment or house.
        </div>
        {/* <div className="relative  w-48  h-10">
<button className="absolute h-full w-full bg-red-800"></button>
<button className="absolute h-7 left-2 top-2 right-2 bottom-2 w-40 bg-red-100"></button>
</div> */}

        <img
          className="mt-10 w-full rounded-2xl h-96 object-cover "
          src={image}
          alt="Harmonious living room relative"
        />
        <div className=" bg-white h-14 p-6 rounded-full  flex justify-center items-center absolute top-72">
          <button className=" hidden md:block bg-black text-slate-300 rounded-full p-2 mt-7 mb-7 w-52 h-10">
            new channel site
          </button>
        </div>

        {/* <div className=' text-9xl text-black absolute'>.</div> */}
        {/* <div className=' text-9xl  text-slate-200  top-[200px]  left-[530px]  absolute'>.</div> */}
      </div>
      <Number />
      <Catalog />
      <Advantage />
      {/* <Ourteam /> */}
      {/* <FAQ/> */}
    </>
  );
}
