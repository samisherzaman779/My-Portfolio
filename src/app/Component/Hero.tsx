"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
        <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
        I am
        <br className='hidden lg:inline-block'/>
        <Typewriter
         options={{
         strings: ['Sami Sherzaman', 'Web Developer', 'UI/UX Designer'],
         autoStart: true,
         loop: true,
         }}
         />
      </h1>
      <p className="mb-8 leading-relaxed text-white font-mono">
      As a passionate and dedicated web developer, I am committed to continious learning and improvement in order to provide top-notch services in the ever-evolving field of web development. With a solid foundation in both frontend and backend technologies, I strive to deliver innovative solutions tailored to meet the unique needs of each project.
      </p>    
      <div className="flex lg:flex-row md:flex-col">
        <Link href={"#Contact"}>
        <button className="bg-blue-600 inline-flex py-3 px-5 rounded-lg items-center text-white lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-blue-800 focus:outline-none">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image 
      src={"/assets/hero.png"} 
      alt={'hero pic'} 
      width={500} 
      height={500}
      className='object-cover object-center rounded-xl mx-auto w-[25rem] h-[20rem]'/>
    </div>
  </div>
  <br />
</section>

  );
};
