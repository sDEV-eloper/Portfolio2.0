import React from "react";
import Logo from "@/public/images/slogo_circle.png";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import StatusIndicator from "./StatusIndicator";

const Footer = () => {
  return (
    <>
      <footer class="text-gray-600 body-font bg-gray-200  border-gray-800">
        <div class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href="/"
            class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image src={Logo} alt="S" className="w-8" />
            <span class="ml-3 text-xl">Portfolio</span>
          </Link>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Frontend Developer—
    
              @surajsingh
            
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <StatusIndicator />
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
