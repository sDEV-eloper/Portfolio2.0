"use client";
import Image from "next/image";
import React, { useState } from "react";
import Vstream from "@/public/images/vStream.jpg";
import { FaReact } from "react-icons/fa";
import{ projectsData} from "./projectConstant";
import reactLogo from "@/public/images/code_icon/react.png";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <section id="projects" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="my-6 text-2xl tracking-tight text-orange-600 sm:text-2xl md:text-2xl">
            PROJECTS
          </h2>
          <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
            What I have done?
          </h2>
          <div className="flex flex-wrap -m-4">
            { projectsData && projectsData.map((item)=>  ( 
              <div className="p-4 md:w-1/3" key={item.name}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={item.backgroundImg}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      PROJECT
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {item.title}
                    </h1>
                    <div className="flex items-center gap-2.5  flex-wrap mb-3 ">
                    { item.tech?.map((tech)=>
                     ( <div key={tech.name} class="flex justify-center items-center  font-medium py-1 px-2 bg-blue-700 rounded-full border">
                        <div class="text-md font-normal leading-none max-w-full flex-initial text-white p-1">
                          {tech.name}
                        </div>
                      </div>)
                        )
                      }
                    </div>
                    <div className="flex items-center flex-wrap ">
                      <Link
                        href={item.projectUrl}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Live Link
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
  )
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
