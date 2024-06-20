import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBeer } from 'react-icons/fa';
import { IoCloudDownloadOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className="z-[50] sticky top-0 bg-black">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={"/assets/tiger.png"} 
            alt="logo" 
            width={300} 
            height={300}
            className="size-14 rounded ml-5 w-[100%]"/>
            <span className="ml-3 text-2xl text-white font-serif">SAM.com</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-slate-300 text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-600" >Home</Link>
            <Link href={"#About"} className="mr-5 hover:text-gray-600" >About</Link>
            <Link href={"#Skills"} className="mr-5 hover:text-gray-600" >Skills</Link>
            <Link href={"#Projects"} className="mr-5 hover:text-gray-600" >Projects</Link>
            <Link href={"#Contact"} className="mr-5 hover:text-gray-600" >Contact</Link>
          </nav>
            <a href="/my-cv/my-Cv.pdf">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mr-3 mt-4 md:mt-0">
            Download CV
            <IoCloudDownloadOutline className="text-lg ml-2"/>
          </button>
            </a>
        </div>
      </header>
    </div>
  )
}

export default Navbar