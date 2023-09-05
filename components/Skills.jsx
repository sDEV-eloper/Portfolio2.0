import Image from 'next/image'
import React from 'react'
import myImg from '@/public/images/3dboybg.jpg'
import Link from 'next/link'

const Skills = () => {
  return (
    <>
    <section id='skills' class="bg-gray-100">
    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            
            <div class="mt-12 md:mt-0">
                <Image src={myImg} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
            </div>
            <div class="max-w-lg">
            <h2 class="my-6 text-2xl tracking-tight text-orange-600 sm:text-2xl md:text-2xl">
                        SKILLS
                    </h2>
                    <h2 class="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        What I do?
                    </h2>                <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                <div class="mt-8">
                    <Link href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span class="ml-2">&#8594;</span></Link>
                </div>
            </div>
        </div>
    </div>
</section></>
  )
}

export default Skills