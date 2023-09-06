"use client";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import {BsGithub } from "react-icons/bs";
import {GrCircleInformation} from "react-icons/gr";
import{ projectsData} from "./projectConstant";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <section id="projects" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
         <div className="ml-6">
         <h2 className="my-6 text-2xl tracking-tight text-orange-600 sm:text-2xl md:text-2xl">
            PROJECTS
          </h2>
          <h2 className="my-4 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
            What I have done?
          </h2>
         </div>
          <div className="flex flex-wrap">
            { projectsData && projectsData.map((item)=>  ( 
              <div className="p-4 md:w-1/3" key={item?.name}>
                <div className="border border-gray-100 border-opacity-60 rounded-lg overflow-hidden bg-gray-800">
                  <Image
                    className="lg:h-56 md:h-36 w-full  object-contain"
                    src={item.backgroundImg}
                    alt="blog"
                  />
                  <div className="p-4 border bg-white">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      PROJECT
                    </h2>
                    <p className="title-font text-xl font-bold text-gray-900 mb-3">
                      {item?.title}
                    </p>
                    <div className="flex items-center gap-1 flex-wrap mb-3 ">
                    { item?.tech?.map((tech)=>
                     ( <div key={tech?.name} class="flex justify-center items-center  font-medium py-1 px-2 bg-gray-200   rounded-lg ">
                        <div class="text-sm font-normal leading-none max-w-full flex-initial text-black p-1">
                          {tech?.name}
                        </div>
                      </div>)
                        )
                      }
                    </div>
                    <div className="flex items-center flex-wrap gap-4 ">
                     {item?.projectUrl && <Link
                        href={item?.projectUrl}
                        className="text-indigo-500 flex items-center md:mb-2 lg:mb-0"
                      >
                       <span className="text-white bg-gradient-to-t from-[#7b14ca] to-[#2951d4]  flex  items-center gap-2  rounded-lg px-2 py-1 shadow-md shadow-gray-400 active:scale-90 "> 
                        View
                        <FaEye />
                       </span>
                      </Link>}
                      <Link
                        href={item.githubUrl}
                        className="text-indigo-500 flex items-center md:mb-2 lg:mb-0 "
                      >
                       <span className="text-white bg-black flex items-center gap-2 border border-gray-500 rounded-lg px-2 py-1 shadow-md shadow-gray-400 active:scale-90"> 
                        Source Code
                        <BsGithub/>
                       </span>
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
