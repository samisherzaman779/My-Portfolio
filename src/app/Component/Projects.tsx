import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Projects = () => {
  return (
    <div id='Projects'>
        <section className="text-white mb-20 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-4">
        {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/5 p-4">
        <div className="flex relative cursor-pointer">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/fb-login.png"
            width={1000}
            height={1000}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-gray-600 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-3">
              FaceBook Login Project
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
            FaceBook Login Page
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This is a the project, which I`ve created my Next.js project about Facebook login page.
            </p>
            <Link target='_blank' 
            href={""}>
            <p className="leading-relaxed text-blue-500 hover:underline ">
              Veiw Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/* Projects */}
        <div className="lg:w-1/3 sm:w-1/5 p-4 ">
        <div className="flex relative cursor-pointer">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assets/portfolio.png"
            width={1000}
            height={1000}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-gray-600 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-3">
              My Portfolio Project
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
            My Portfolio
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a the project, which I`ve created my Next.js project about My Portfolio.
            </p>
            <Link target='_blank' 
            href={""}>
            <p className="leading-relaxed text-blue-500 hover:underline ">
              Veiw Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/5 p-4">
        <div className="flex relative cursor-pointer">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={"/assets/storesam.png"}
            width={1000}
            height={1000}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-gray-600 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-3">
              E-Commerce Project
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
            E-Commerce Website
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This is a the project, which I`ve created my Next.js project about E-Commerce.
            </p>
            <Link target='_blank' 
            href={""}>
            <p className="leading-relaxed text-blue-500 hover:underline ">
              Veiw Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
     
    </div>
    
  </div>
</section>

    </div>
  )
}

export default Projects;