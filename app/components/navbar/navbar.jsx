"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <nav className='px-6 py-4 bg-black text-white flex items-center justify-between font-["Cormorant_Upright"]'>
      <Link href={'/'} className='text-2xl lg:text-4xl font-bold uppercase'>Geritch</Link>

      <ul className='items-start gap-8 text-base font-normal font-["Open_Sans"] hidden lg:flex '>
        <li className=''>
          <Link href={"/"} className='text-[#dcca87] hover:text-white transition duration-300'>Home</Link>
        </li>
        <li className=''>
          <Link href={"/pages"} className='text-[#dcca87] hover:text-white transition duration-300'>Pages</Link>
        </li>
        <li className=''>
          <Link href={"/contact"} className='text-[#dcca87] hover:text-white transition duration-300'>Contact</Link>
        </li>
        <li className=''>
          <Link href={"/blog"} className='text-[#dcca87] hover:text-white transition duration-300'>Blog</Link>
        </li>
        <li className=''>
          <Link href={"/landing"} className='text-[#dcca87] hover:text-white transition duration-300'>Landing</Link>
        </li>
      </ul>

      <div className='sm:flex hidden items-center gap-4 '>
        <Link href={""} className="text-[#dcca87] hover:text-white transition duration-300 ">Log In / Registration</Link>
        <div className='w-[1px] h-6 bg-white'></div>
        <Link href={""} className="text-[#dcca87] hover:text-white transition duration-300">Book Table</Link>
      </div>

      {/* Mobile NAVIGATION */}
      <div className='flex items-center lg:hidden'>
        <AiOutlineMenu
          size={20}
          color='#fff'
          className='cursor-pointer'
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='overlay z-50 '>
            <MdOutlineRestaurantMenu
              size={20}
              color='#DCCa87'
              className='cursor-pointer absolute right-7 top-7 z-50 '
              onClick={() => setToggleMenu(false)}
            />

            <ul
              className=' text-4xl 
            '
            >
              <li className='navbar'>
                <Link href={"/"} className='text-[#DCCA87] hover:text-white transition duration-300'>Home</Link>
              </li>
              <li className='navbar'>
                <Link href={"/pages"} className='text-[#DCCA87] hover:text-white transition duration-300'>Pages</Link>
              </li>
              <li className='navbar'>
                <Link href={"/contact"} className='text-[#DCCA87] hover:text-white transition duration-300'>Contact</Link>
              </li>
              <li className='navbar'>
                <Link href={"/blog"} className='text-[#DCCA87] hover:text-white transition duration-300'>Blog</Link>
              </li>
              <li className='navbar'>
                <Link href={"/landing"} className='text-[#DCCA87] hover:text-white transition duration-300'>Landing</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
