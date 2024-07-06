import React from 'react';

const Model = () => {
  return (
    <section className="h-dvh flex justify-center items-center">
      <div className=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-12 lg:py-16 flex lg:flex-row flex-col">
        <div className="mr-auto place-self-center lg:col-span-7 flex-1">
          <h1 className="max-w-4xl mb-4 text-4xl text-black font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            TikGuard: Detect Hate Speech & Violent Content.
          </h1>
          <p className="max-w-3xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            TikGuard leverages advanced machine learning algorithms to provide
            robust detection of hate speech, hateful imagery, and violent
            content. Upload text, images, or videos to quickly and accurately
            identify harmful material, ensuring a safer online environment.
          </p>
          <a
            href="#text"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Contact Us
          </a>
        </div>
        <div className="flex-1">

          <div className="relative">
            
            <input
              type="search"
              id="default-search"
              className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bad words to analyze..."
              required
            />
            <button
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Analyse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
