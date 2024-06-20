import React from 'react'
import { IoShieldCheckmark } from 'react-icons/io5'

export const Skills = () => {
  return (
    <div id='Skills'>
        <section className="text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">
        About
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 cursor-pointer -mt-[3rem]">
        {/* Skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoShieldCheckmark />
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[100%]'></div>
            </div>
            <p className='text-blue-400 font-bold text-right'>100%</p>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoShieldCheckmark />
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[95%]'></div>
            </div>
            <p className='text-blue-400 font-bold text-right'>95%</p>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoShieldCheckmark />
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              TypeScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[90%]'></div>
            </div>
            <p className='text-blue-400 font-bold text-right'>90%</p>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoShieldCheckmark />
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              NEXT JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>
            </div>
            <p className='text-blue-400 font-bold text-right'>80%</p>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoShieldCheckmark />
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              Tailwind CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[75%]'></div>
            </div>
            <p className='text-blue-400 font-bold text-right'>75%</p>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoShieldCheckmark />
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              React JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[60%]'></div>
            </div>
            <p className='text-blue-400 font-bold text-right'>60%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
