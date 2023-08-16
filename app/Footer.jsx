import React from "react";

export default function Footer() {
  return (
    <footer className=' bg-[#231213] font-["Cormorant_Upright"] overflow-hidden'>
      <div className='sm:mx-32 mx-0'>
        <div className='bg-[#121212] w-full text-center py-4 px-6'>
          <div className='max-w-xl mx-auto space-y-3'>
            <span className='text-white text-xl text-center'>Newsletter</span>
            <h1 className='text-[#dcc487] capitalize ms:text-5xl text-xl font-bold'>
              subscribe to our newsletter
            </h1>
            <p className='text-white text-center'>
              And never miss latest Updates!
            </p>

            <div className='sm:flex sm:flex-row flex-col items-center justify-center gap-4 mx-auto text-center '>
              <input
                type='text'
                placeholder='Email Address'
                className='text-left pl-5 w-[80%] border-none outline-none py-1'
              />
              <button className='text-md mt-1 font-black px-8 flex text-center items-center justify-center hover:text-black hover:bg-white transition duration-300 py-3  bg-[#dcc487] '>
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='sm:flex sm:flex-row flex-col sm:items-baseline sm:justify-around items-start justify-start text-center sm:space-y-0 space-y-6 sm:mx-32 mx-5 pt-20'>
        <div className=' flex sm:order-2'>
          <h1 className='text-6xl text-[#dcc487]'>Geritch</h1>
          <span className='mt-8'></span>
        </div>

        <div className='text-white sm:order-1 flex flex-col items-start sm:items-center'>
          <h1 className='mb-5 text-2xl font-bold'>Contact Us</h1>
          <div className='flex flex-col sm:items-center items-start'>
            <span className=''>New York, NY 10010, USA</span>
            <span className='text-white/40'>+1 313-344-1220</span>
            <span className='text-white/40'>+1 313-344-1220</span>
          </div>
        </div>

        <div className='text-white flex sm:order-3  flex-col items-start sm:items-center'>
          <h1 className='mb-5 text-2xl font-bold'>Working Hours</h1>
          <div className='flex flex-col sm:items-center items-start'>
            <span className=''>New York, NY 10010, USA</span>
            <span className='text-white/40'>+1 313-344-1220</span>
            <span className='text-white/40'>+1 313-344-1220</span>
          </div>
        </div>
      </div>
      <div className='text-center py-10'>
        <span className='text-center text-white/40 mx-auto font-semibold w-full'>
          All rights reserved @
        </span>
      </div>
    </footer>
  );
}
