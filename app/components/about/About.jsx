import Heading from "@/app/Heading";
import Image from "next/image";
import "/app/globals.css";

export default function About() {
  return (
    <div className='about min-h-screen font-["Cormorant_Upright"] relative bg-[#121212] py-5 px-5'>
      <div className='flex items-center justify-center gap-8 md:flex-row flex-col overflow-hidden lg:mx-10'>
        <div className='md:text-right flex md:gap-4 gap-4 flex-col md:items-end  max-w-md '>
          <Heading title='About Us' />
          <p className='text-white'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            neque commodi nisi maxime deleniti fuga?
          </p>
          <button className='text-md mt-1 font-black w-fit px-8 flex items-center justify-center hover:text-black hover:bg-white transition duration-300 py-3 bg-[#dcc487] '>
            Explore Menu
          </button>
        </div>
        <div className=''>
          <Image
            src={"/knife.png"}
            className=''
            width={59}
            height={54}
          />
        </div>
        <div className='text-left flex flex-col items-start gap-4 max-w-md '>
          <Heading title='Our History' />
          <p className='text-white'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            neque commodi nisi maxime deleniti fuga?
          </p>
          <button className='text-md mt-1 font-black  px-8 flex items-center justify-center hover:text-black hover:bg-white transition duration-300 py-3  bg-[#dcc487] '>
            Explore Menu
          </button>
        </div>
      </div>
      <div className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] -z-10'>
        <Image
          src={"/g.svg"}
          width={391}
          height={415}
          className=''
          alt='G'
        />
      </div>

      
    </div>
  );
}
