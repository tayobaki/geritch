import Heading from "./Heading";

export default function FindUs() {
  return (
    <section className='flex items-center justify-center relative min-h-screen w-full bg-[#121212] px-5 font-["Cormorant_Upright"]'>
      <div className='md:flex md:flex-row flex-col h-full justify-center items-center gap-4 md:mx-32 md:py-0 py-20 px-1'>
        <div className='flex flex-1 flex-col items-start h-full justify-center '>
          <Heading title='Cornoe' />
          <h1
            className='text-6xl mt-3
           leading-9 text-[#dcc487]'
          >
            Find Us
          </h1>
          <p className='text-white mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            labore?
          </p>
          <span className='capitalize mt-7 text-[#dcc487] text-3xl mb-4'>opening hours</span>
          <span className="text-white text-xl">Sat 01:00 - 09:00</span>
          <span className="text-white text-xl">Mon 02:00 - 10:00</span>
          <button className='text-md mt-5 font-black  px-8 flex items-center justify-center hover:text-black hover:bg-white transition duration-300 py-3  bg-[#dcc487] '>
            View
          </button>
        </div>

        <div className=' mt-9 flex-1 w-[80%] h-full lg:p-16'>
          <img
            src='./drink.png'
            alt=''
            className='w-full object-cover md:h-auto h-full'
          />
        </div>
      </div>

      <div className='absolute top-[50%] translate-y-[-50%] hidden lg:block left-0 space-x-4 -rotate-90 text-white'>
        <span>#Bar</span>
        <span>#Gradient</span>
      </div>
    </section>
  );
}
