import Image from "next/image";
import React from "react";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const About = () => {
  return (
    <>
      <div id="about" class="relative bg-white overflow-hidden h-screen">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 h-screen">
            <div class="pt-1"></div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-18 lg:px-8 xl:mt-20">
              <div class="sm:text-center lg:text-left">
                <h2 class="my-6 text-2xl tracking-tight text-orange-600 sm:text-2xl md:text-2xl">
                  ABOUT ME
                </h2>
                <h2 class="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  Who I am?
                </h2>

                <p>
                  A great frontend developer with a passion for crafting
                  user-centric, responsive web interfaces. With decent of
                  experience, I specialize in turning design concepts into
                  seamless and visually appealing web experiences. My journey
                  into web development began with a fascination for turning code
                  into interactive websites and web apps.
                  <br />
                  <br />
                  <span className="font-medium">
                    Let&apos;s collaborate and bring your web projects to life.
                  </span>
                </p>
                <p className="border text-sm rounded-lg p-2 font-medium  bg-gray-200 my-3 ">
                  <FaGraduationCap />I hold a Bachelor of Technology degree in
                  Computer Science earned between 2019 and 2023.
                  <span className="flex gap-2 items-center text-orange-500">
                    <SlCalender />
                    <span>2019-2023</span>
                  </span>
                </p>
                <p className="border text-sm rounded-lg p-2 font-medium  bg-gray-200 my-3 ">
                  <FaLaptopCode />I am currently participating in a virtual
                  internship at NetStack as a Frontend Developer, where I am
                  working on building an automated dropshipping product.
                  <span className="flex gap-2 items-center text-orange-500">
                    <SlCalender />
                    <span>May 2023 - Ongoing</span>
                  </span>
                </p>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 sm:hidden md:block ">
          <Image
            class=" sm:w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://static.vecteezy.com/system/resources/previews/022/484/651/non_2x/happy-3d-student-boy-with-books-on-white-background-transparent-background-free-png.png"
            width={980}
            height={980}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
