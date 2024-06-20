import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const About = () => {
  return (
    <div id='About'>
        <section className="text-white body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-3/2 mb-10 object-cover object-center rounded-full"
      alt="hero"
      src="/assets/heropic.jpg"
      width={500}
      height={500}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed">
      As a passionate and dedicated web developer, I am committed to continious learning and improvement in order to provide top-notch services in the ever-evolving field of web development. With a solid foundation in both frontend and backend technologies, I strive to deliver innovative solutions tailored to meet the unique needs of each project.
      </p>
      <div className="flex justify-center">
        <a href={"/my-cv/my-Cv.pdf"}>
        <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg">
          Veiw CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
