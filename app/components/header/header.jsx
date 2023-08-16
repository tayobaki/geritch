import Heading from "../../Heading";
// import Image from "next/image";


export default function Header() {
  return (
    <header className='min-h-[90vh] bg-black text-white pt-10  font-["Cormorant_Upright"] flex items-center relative'>
      <div className='lg:flex lg:flex-row  flex-col items-center justify-between lg:mx-36 mx-5'>
        <div className='flex-1 max-w-xl flex flex-col items-start justify-center'>
          <Heading title='Chase the new Flavour' />
          <h1 className='text-[50px] sm:text-7xl lg:text-8xl font-bold text-[#dcca87] leading-[79px]'>The Key To Fine Dining</h1>
          <button className='text-lg mt-1 font-black  px-8 flex items-center justify-center hover:text-black hover:bg-white transition duration-300 py-3 bg-[#dcc487] '>
            Explore Menu
          </button>
        </div>

        <div className='lg:ml-5 w-full flex-1 flex items-center lg:justify-center  '>
          {/* <Image
            src='/Hero img.jpg'
            width={0}
            height={736}
            className='w-[50%] '
            alt='Hero Img'
          /> */}
          <img src="./Hero img.jpg" alt="" className="w-[80%] h-auto mt-5 p-5" />

        </div>
      </div>

      <div className="absolute top-[50%] translate-y-[-50%] hidden lg:block left-0 space-x-4 -rotate-90">
        <span>#Bar</span>
        <span>#Gradient</span>
      </div>

      <span className="absolute  bottom-10 left-[50%] translate-x-[-50%] hidden lg:block text-white/40 text-sm">
        01 - 02 03 41
      </span>
    </header>
  );
}
