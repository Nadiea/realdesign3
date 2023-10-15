import React from "react";
import image from "../assets/li.jpg";

export default function Catalog() {
  return (
    <div >
      <div class="text-3xl font-serif font-bold mt-10 ml-4 sm:ml-8 md:ml-12  lg:ml-52">
        Catalog
      </div>

      <div className="hidden lg:block">
        {" "}
        <div class="text-sm font-serif font-poppins mt-2 mb-3 ml-4 sm:ml-8 md:ml-12 lg:ml-52">
          Filter
        </div>
        <div class="ml-4 absolute  border-dashed border-2  border-slate-400  rounded-3xl p-1 w-4/6 sm:ml-8 md:ml-12 lg:ml-52 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_2fr_1fr_2fr] gap-2">
          <div class="p-4 ">
            <h1 className=" font-serif font-semibold text-sm ml-1">Rooms</h1>
            <div className=" flex gap-1">
              <h1>
                <svg
                  class="h-8 w-8 text-black-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h1>
              <h1 className="  mt-1 font-semibold text-sm ">0</h1>
              <h1>
                <svg
                  class="h-8 w-8 text-black-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h1>
            </div>
          </div>

          <div class="p-4 ">
            <h1 className=" font-serif font-semibold text-sm">
              Types of real estate
            </h1>
            <div className=" flex gap-1 mt-1">
              <button className="h-7 border p-3 border-black font-bold flex justify-center items-center font-poppins rounded-full text-xs bg-white">
                Private
              </button>
              <button className="h-7 border p-3 border-black font-bold flex justify-center items-center font-poppins rounded-full text-xs bg-black text-white">
                Apartment
              </button>
            </div>
          </div>

          <div class="p-4 ">
            <h1 className=" font-serif font-semibold text-sm">Price($)</h1>
            <div className=" flex gap-1 mt-1">
              <input
                type="text"
                placeholder="From"
                className="h-5 w-24 border p-4   border-black font-bold flex justify-center items-center font-poppins rounded-full text-xs bg-white"
              />

              <input
                type="text"
                placeholder="To"
                className="h-5 w-24 border p-4 border-black font-bold flex justify-center items-center font-poppins rounded-full text-xs bg-white"
              />
            </div>
          </div>

          <div class="p-4 ">
            <h1 className=" font-serif font-semibold text-sm">
              District of the city
            </h1>
            <div>
              <select
                id="countries"
                className=" bg-slate-300 text-sm text-slate-600 flex justify-center items-center  p-1 mt-1 w-44 rounded-full"
              >
                <option selected>Select District</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
       
      </div>
      <div className="  top-6 mb-5 pl-[1083px] hidden md:block   relative">
          <svg
            className=" h-14 w-14      text-slate-100 fill-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <circle cx="12" cy="12" r="10" />{" "}
            <line x1="12" y1="8" x2="12" y2="16" />{" "}
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </div>  

      <div className="flex flex-col items-center md:p-10  sm:p-8 ml-16  md:ml-10 sm:ml-10">
        <div className=" md:hidden ">
          {" "}
          <div className="  absolute  flex justify-start  bg-white border-dashed border-2  border-slate-400 rounded-3xl w-72 font-semibold text-sm  p-3 items-start  text-slate-900 h-12">
            Filter
          </div>
          <div className=" pl-64  relative ">
            <svg
              className=" h-12 w-12     text-slate-100 fill-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <circle cx="12" cy="12" r="10" />{" "}
              <line x1="12" y1="8" x2="12" y2="16" />{" "}
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </div>
        </div>

        <div className="mt-5 grid md:grid-cols-2 ml-16  md:ml-10 sm:ml-10  container w-10/12">
          <div>
            <img
              className="h-48 w-9/12 rounded-3xl"
              src={image}
              alt="Apartment"
            />
          </div>
          <div>
            <span className="text-slate-600 text-xs">Apartment</span>
            <br />
            <span className="font-semibold text-sm">
              Certainly, real estate company
              <br />
              blogs can cover a wide range
              <br />
              of topics to provide valuable information,
            </span>
            <br />
            <span className="text-slate-500 text-sm">
              real estate transactions, offer answers to
              <br />
              and provide insights into the nuances of the industry.
            </span>
            <br />
            <span className="font-semibold mt-5 text-lg">$80.00</span>
          </div>
        </div>

        <div className="mt-5 grid md:grid-cols-2 ml-16  md:ml-10 sm:ml-10  container w-10/12">
          <div>
            <img
              className="h-48 w-9/12  rounded-3xl"
              src={image}
              alt="Apartment"
            />
          </div>
          <div className=" ">
            <span className="text-slate-600 text-xs">Apartment</span>
            <br />
            <span className="font-semibold text-sm">
              Certainly, real estate company
              <br />
              blogs can cover a wide range
              <br />
              of topics to provide valuable information,
            </span>
            <br />
            <span className="text-slate-500 text-sm">
              real estate transactions, offer answers to
              <br />
              and provide insights into the nuances of the industry.
            </span>
            <br />
            <span className="font-semibold mt-5 text-lg">$80.00</span>
          </div>
        </div>
        <div className="mt-5 grid md:grid-cols-2 ml-16  md:ml-10 sm:ml-10  container w-10/12">
          <div>
            <img
              className="h-48 w-9/12  rounded-3xl"
              src={image}
              alt="Apartment"
            />
          </div>
          <div>
            <span className="text-slate-600 text-xs">Apartment</span>
            <br />
            <span className="font-semibold text-sm">
              Certainly, real estate company
              <br />
              blogs can cover a wide range
              <br />
              of topics to provide valuable information,
            </span>
            <br />
            <span className="text-slate-500 text-sm">
              real estate transactions, offer answers to
              <br />
              and provide insights into the nuances of the industry.
            </span>
            <br />
            <span className="font-semibold mt-5 text-lg">$80.00</span>
          </div>
        </div>
        <div className="h-8 mt-10 border p-3 border-black font-bold flex justify-center items-center font-mono rounded-full text-xs bg-white">
          See More
        </div>
      </div>
    </div>



  );
}
