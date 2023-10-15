import React, { useState } from 'react';
import {Accordion,AccordionHeader,AccordionBody,} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <div className='font-serif text-xl font-bold  mb-5 '>Frequently Asked Questions</div>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
      <div className=' flex '>
      <div className='bg-black rounded-xl flex justify-center items-center absolute text-white h-12 w-7/12 ml-72 cursor-pointer' onClick={() => handleOpen(1)}>
          What is Home?
        </div>
        <button className=' h-16 w-28 bg-black text-white text-xl relative left-[963px] rounded-3xl -top-5' onClick={() => handleOpen(1)}> +</button>
      </div>
        <AccordionBody className='flex  border-dashed border-black border-2 rounded-xl justify-center h-16 p-2 w-7/12 ml-72 mb-5 bg-slate-300 text-black font-serif font-semibold '>
          We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
      <div className='bg-black flex  justify-center rounded-xl items-center text-white h-12 w-7/12 ml-72 cursor-pointer' onClick={() => handleOpen(2)}>
          What is MApartment?
        </div>
        <AccordionBody className='flex border-dashed rounded-xl justify-center h-16 p-2 w-7/12 ml-72 mb-5 bg-slate-300 text-black font-serif font-semibold '>
          We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
      <div className='bg-black flex justify-center rounded-xl  items-center text-white h-12 w-7/12 ml-72 cursor-pointer' onClick={() => handleOpen(3)}>
          What is Rent House?
        </div>
        <AccordionBody  className='flex border-dashed rounded-xl justify-center  border bordar-dash h-16 p-2 w-7/12 ml-72 mb-5 bg-slate-300 text-black font-serif font-semibold '>
          We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
      <div className='bg-black flex justify-center rounded-xl  items-center text-white h-12 w-7/12 ml-72 cursor-pointer' onClick={() => handleOpen(3)}>
         
        </div>
      
      </Accordion>
    </div>
  );
}
