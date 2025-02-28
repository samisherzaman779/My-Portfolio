import React from 'react'

export const Contact = () => {
  return (
    <div id='Contact'>
        <section className="text-gray-600 body-font relative"> 
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"> 
    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6957.937120941877!2d67.0646389!3d24.8505246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c2176245ccb%3A0xbe59fb06cf237aa7!2sMehmoodabad%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e1!3m2!1sen!2s!4v1715172306661!5m2!1sen!2s"
        style={{ filter: " contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-gray-700 relative text-white flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-3">
            TPII, Mehmoodabad, Karachi, Pakistan.
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-blue-300 leading-relaxed">samisherzaman779@email.com</a>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">0306-6039949</p>
        </div>
      </div>
    </div>
    
    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 px-4 rounded-lg mt-8 md:mt-0">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
        Contact
      </h2>
      <p className="leading-relaxed mb-5 text-white">
        Feel Free To Contact </p>
        <form action="https://formspree.io/f/xwpvgvvd" method='POST'>
      <div className="relative mb-4 p-2">
        <label htmlFor="name" className="leading-7 text-sm text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>

      <div className="relative mb-4 p-2">
        <label htmlFor="email" className="leading-7 text-sm text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>

      <div className="relative mb-4 p-2">
        <label htmlFor="Subject" className="leading-7 text-sm text-white">
          Subject
        </label>
        <input
          type="text"
          id="Subject"
          name="Subject"
          className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>

      <div className="relative mb-4 p-2">
        <label htmlFor="message" className="leading-7 text-sm text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-700 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white  bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg">
        Send
      </button>
      </form>
    </div>
  </div>
</section>

    </div>
  )
}

