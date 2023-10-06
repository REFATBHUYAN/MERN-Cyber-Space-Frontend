import React from "react";
import Popular from "./Popular";
import SliderCatagory from "./SliderCatagory";

const Banner2 = () => {
  return (
    <div
      className="hero"
      style={{
        // backgroundImage: "url(https://cdn.cultofandroid.com/wp-content/uploads/2014/06/Screen-Shot-2014-06-04-at-17.19.51.jpg)",
        backgroundImage: "url(https://i.ibb.co/HYxjFfs/hero-bg.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center text-neutral-content flex flex-col">
        <div className="max-w-2xl text-slate-400 mb-2 mt-28">
          <h1 className="font-extrabold text-3xl mb-9 text-slate-700">
            Hey, looking for something?
          </h1>

          <form className="w-full md:w-[670px] h-12 mb-6">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-2 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for your desired software..."
                required
              />
              <button
                type="submit"
                className="text-slate-400 absolute right-5 bottom-2.5   font-medium py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l14 0"></path>
                  <path d="M13 18l6 -6"></path>
                  <path d="M13 6l6 6"></path>
                </svg>
              </button>
            </div>
          </form>
          <p>You can also browse our popular categories</p>
        </div>
        
        <SliderCatagory></SliderCatagory>
      </div>
    </div>
  );
};

export default Banner2;
