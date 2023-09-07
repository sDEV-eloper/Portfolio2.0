import Image from "next/image";
import React from "react";
import myImg from "@/public/images/3dskillboy.jpg";
import Link from "next/link";
import {familiarTech, mainTech}from './skillsConstants'

const Skills = () => {
  return (
    <>
      <section id="skills" class="bg-gray-100">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="mt-12 md:mt-0 flex items-center justify-center">
              <Image
                src={myImg}
                alt="About Us Image"
                class="object-cover rounded-lg shadow-md md:w-[80%] w-full "
              />
            </div>
            <div class="max-w-lg">
              <h2 class="my-6 text-2xl tracking-tight text-orange-600 sm:text-2xl md:text-2xl">
                SKILLS
              </h2>
              <h2 class="my-6 text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
                Tech Stack
              </h2>
              <div class="mt-4 text-gray-600 text-lg flex flex-wrap gap-3 ">
                {mainTech.map((item)=>(
                    <div key={item.id} className="flex gap-2 items-center border rounded-lg px-2 py-1 hover:scale-110 transition duration-150 bg-white shadow-md shadow-gray-300">
                  <Image
                    src={item.logo}
                    alt=""
                    className="w-8"
                  />
                  <p>{item.name}</p>
                </div>
                ))}
              </div>
              <h2 class="my-6 text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
                Familiar With
              </h2>
              <div class="mt-4 text-gray-600 text-lg flex flex-wrap gap-3  ">
                {familiarTech.map((item)=>(
                    <div key={item.id} className="flex gap-2 items-center border rounded-lg px-2 py-1 hover:scale-110 transition duration-150 bg-white shadow-md shadow-gray-300">
                  <Image
                    src={item.logo}
                    alt=""
                    className="w-8"
                  />
                  <p>{item.name}</p>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
