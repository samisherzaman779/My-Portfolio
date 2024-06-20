import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";


export const Footer = () => {
  return (
    <div >
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={"/assets/tiger.png"} 
            alt="logo" 
            width={300} 
            height={300}
            className="size-14 rounded ml-5"/>
      <span className="ml-3 text-xl text-white">SAM.com</span>
    </a>
    <p className="text-sm text-slate-300 sm:ml-4  sm:pl-4 sm:border-l-2 sm:border-gray-200  sm:py-2 sm:mt-0 mt-4 ">© 2024 Sami Sherzaman —
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 mr-3 justify-center sm:justify-start">
      <Link 
      target='_blank'
      href={"https://github.com/samikhan1622"} 
      className="text-gray-300 text-2xl hover:text-[#4c3678c4]">
      <BsGithub />
      </Link>

      <Link 
      target='_blank'
      href={"https://www.instagram.com/samikhan1622"} 
      className="ml-3 text-gray-300 text-2xl hover:text-[#eea26c]">
      <BsInstagram />
      </Link>
      <Link 
      
      target='_blank'
      href={"https://www.linkedin.com/in/sami-sherzaman"} 
      className="ml-3 text-gray-300 text-2xl hover:text-[#4c48af]">
      <BsLinkedin />
      </Link>
           
      <Link id='youtube'
      target='_blank'
      href={"https://www.youtube.com/channel/UCcJYSfoH5DG-nK-Z-E2QpVQ"} 
      className="ml-3 text-gray-300 text-2xl hover:text-[#ff0000]">
      <BsYoutube />
      </Link>
    </span>
  </div>
</footer>
    </div>
  )
}
