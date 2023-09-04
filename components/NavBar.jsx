"use client"
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu} from 'react-icons/rx';
import Logo from "@/public/images/slogo_circle.png"
import Image from 'next/image';


function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-gray-200 fixed top-0 left-0 right-0 z-10">
        <div className="justify-evenly px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <div className='flex items-center justify-center gap-4'>
                <Image src={Logo} alt='S' className='w-12'/>
                <h2 className="text-2xl text-cyan-800 font-bold ">PORTFOLIO</h2>
           
                </div>
                </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                      <span className='text-black text-2xl'>
                        <AiOutlineClose/>
                </span>
                  ) : (
                    <span className='text-black text-2xl'>
                        <RxHamburgerMenu />
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-md text-gray-700 py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-gray-300  border-purple-900  md:hover:text-purple-600  md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-md text-gray-700 py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-gray-300  border-purple-900  md:hover:text-purple-600  md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-md text-gray-700 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-300  border-purple-900  md:hover:text-purple-600  md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Skills
                  </Link>
                </li>
                <li className="pb-6 text-md text-gray-700 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-300  border-purple-900  md:hover:text-purple-600  md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="pb-6 text-md text-gray-700 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-300  border-purple-900  md:hover:text-purple-600  md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;