import React from 'react'
import NavBar from "../components/NavBar"
import Link from 'next/link'
import Logo from "@/public/images/slogo_circle.png"
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <section className='h-screen'>

        <nav
          className=" flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start"
          data-te-navbar-ref>
         <NavBar/>
        </nav>
 
        <div className="h-full bg-gradient-to-t from-[#bc64ff] via-[#25dafe] to-[#ffffff] py-24 px-6 text-center dark:bg-neutral-900 flex items-center justify-center flex-col">
        {/* <div className="h-full bg-gradient-to-t from-[#ff5b5b] via-[#fff702] to-[#ffffff] py-24 px-6 text-center dark:bg-neutral-900 flex items-center justify-center flex-col"> */}
          <p className="  text-md tracking-tight md:text-xl xl:text-xl text-gray-600">
          Creating Tomorrow&apos;s Web Today <br />
          </p>
          <p className="mb-16 mt-8 text-3xl font-bold tracking-tight md:text-5xl xl:leading-tight  xl:text-5xl md:px-48  text-[#292929]">Hi, I am <span className='text-[#8d17ab]'>Suraj Singh</span><br/>Frontend Developer Extraordinaire: Dive into My World</p>
            <div className='flex gap-4'>
          <Link className=" bg-black mb-2 inline-block hover:scale-110 transition-all duration-200 cursor-pointer rounded-full bg-primary md:px-12 px-6 md:py-4 py-3  text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]  ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</Link>
            <Link className=" bg-transparent border border-gray-700 text-black mb-2 inline-block hover:scale-110 transition-all duration-200 cursor-pointer rounded-full bg-primary md:px-12 px-6 md:py-4 py-3  text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca]  ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</Link>
       
           </div>
        </div>

      </section> 





    </>
  )
}

export default Home