
import NavBar from "../components/NavBar";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <section className="h-screen">
        <nav
          className=" flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start"
          data-te-navbar-ref
        >
          <NavBar />
        </nav>

        <div className="h-full bg-gradient-to-b from-white via-gray-100 to-gray-300 py-24 px-6 text-center dark:bg-neutral-900 flex items-center justify-center flex-col">
          <p className="  text-md tracking-tight md:text-xl xl:text-xl text-gray-600">
            Creating Tomorrow&apos;s Web Today <br />
          </p>
          <p className="mb-16 mt-8 text-3xl font-bold tracking-tight md:text-5xl xl:leading-tight  xl:text-5xl md:px-48  text-[#292929]">
            Hi, I am <span className="text-[#E77C37]">Suraj Singh</span>
            <br />
            Frontend Developer Extraordinaire: Dive into My World
          </p>
          <div className="flex gap-4">
            <Link
              className=" flex bg-black mb-2 items-center gap-x-2 hover:scale-110 transition-all duration-200 cursor-pointer rounded-full bg-primary md:px-10 px-8 py-3  text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]  ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="https://drive.google.com/file/d/1BZ6p0ReHrAJeEzEgDJFXSbKKnBFOh0qk/view?usp=sharing"
              download
              role="button"
              target='_blank'
            >
              Resume
              <BsDownload />
            </Link>
            <Link
              href="/#contact"
              className=" bg-white  text-black mb-2 inline-block hover:scale-110 transition-all duration-200 cursor-pointer rounded-full bg-primary md:px-10 px-8 py-3  text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca]  ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              role="button"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
