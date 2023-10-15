
  import React, { useState, useEffect } from 'react';

  export default function Counters() {
    const [counters, setCounters] = useState({
      satisfied: 0,
      ok: 0,
      perfect: 0,
      fine: 0,
      real: 0,
    });
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCounters((prevCounters) => {
          const newPerfect = prevCounters.perfect + 78;
  
          if (newPerfect >= 1000) {
            clearInterval(interval); 
          }
  
          return {
            satisfied: prevCounters.satisfied + 130,
            ok: prevCounters.ok + 190,
            perfect: newPerfect,
            fine: prevCounters.fine + 150,
            real: prevCounters.real + 210,
          };
        });
      }, 100);
  
      return () => clearInterval(interval);
    }, []);






   
    



















  return (
    <>
      <div className='p-4 md:p-16 font-serif '>
        <div className='mt-10 text-center md:text-left font-serif text-2xl'>
          Our Numbers Speak For Themselves
        </div>
        <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-36'>
          <div className='text-center md:text-left'>
            <div className='text-xl md:text-4xl'>
              {counters.satisfied.toLocaleString()}
            </div>
            <div className='text-sm md:text-xl mt-2'>
              satisfied customers
            </div>
          </div>
          <div className='text-center md:text-left'>
            <div className='text-xl md:text-4xl '>
              {counters.ok.toLocaleString()}
            </div>
            <div className='text-sm md:text-xl mt-2'>
              ok customers
            </div>
          </div>
          <div className='text-center md:text-left'>
            <div className='text-xl md:text-4xl'>
              {counters.perfect.toLocaleString()}
            </div>
            <div className='text-sm md:text-xl mt-2'>
              perfect customers
            </div>
          </div>
          <div className='text-center md:text-left'>
            <div className='text-xl md:text-4xl'>
              {counters.fine.toLocaleString()}
            </div>
            <div className='text-sm md:text-xl mt-2'>
              fine customers
            </div>
          </div>
          <div className='text-center md:text-left'>
            <div className='text-xl md:text-4xl'>
              {counters.real.toLocaleString()}
            </div>
            <div className='text-sm md:text-xl mt-2'>
              real customers
            </div>
          </div>
        </div>
      </div>
      <div class="h-auto sm:h-8 mt-1 p-2 bg-black text-slate-300 text-xs">
  The oldest classical British and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized. okok
</div>

    </>
  );
}
