export default function Footer() {
    return (
      <div className="grid md:grid-cols-1 lg:grid-cols-2 bg-black  mt-36">
        <div className="p-8 md:p-10 lg:p-20">
          <div className="font-serif text-white text-xl md:text-3xl mb-4 md:mb-8">THANK YOU!</div>
          <div className="h-8 border w-28 md:w-32 p-2 border-black font-bold flex justify-center items-center font-mono rounded-full text-xs bg-white">
            TO CONSULT
          </div>
        </div>
  
        <div className="p-8 md:p-10 lg:p-20">
          <div className="mb-4 md:mb-8 font-serif text-white text-sm md:text-base">With breathtaking views of the city skyline and <br/> meticulous attention to detail, our<br/> elegantly designed rooms</div>
          <div className="h-8 border w-28 md:w-32 p-2 mb-2 md:mb-3 border-black font-bold flex justify-center items-center font-mono rounded-full text-xs bg-white">
            TO CONSULT
          </div>
          <div className="h-8 border w-28 md:w-32 p-2 border-black font-bold flex justify-center items-center font-mono rounded-full text-xs bg-white">
            Instagram
          </div>
        </div>
      </div>
    );
  }
  