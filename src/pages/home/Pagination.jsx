import React from "react";

const Pagination = () => {
  return (
    <div>
      <nav
        className="isolate md:inline-flex -space-x-px text-center  flex flex-wrap gap-2 rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <a
          href="#"
          className="relative inline-flex items-center rounded-md w-10 h-10 px-2 py-2 text-gray-400 ring-1 ring-inset dark:text-slate-100 ring-gray-300 hover:bg-indigo-600 focus:z-20 focus:outline-offset-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevrons-left"
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
            <path d="M11 7l-5 5l5 5"></path>
            <path d="M17 7l-5 5l5 5"></path>
          </svg>
        </a>
        <a
          href="#"
          className="relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-indigo-700 dark:text-slate-100 focus:z-20 focus:outline-offset-0 h-10 w-[70px]"
        >
          <span className="sr-only text-slate-700">Prev</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-narrow-left"
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
            <path d="M5 12l4 4"></path>
            <path d="M5 12l4 -4"></path>
          </svg>
          Prev
        </a>
        <a
          href="#"
          className="relative rounded-md inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-indigo-600 dark:text-slate-100 focus:z-20 focus:outline-offset-0"
        >
          1
        </a>
        <a
          href="#"
          className="relative rounded-md inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-indigo-600 dark:text-slate-100 focus:z-20 focus:outline-offset-0"
        >
          2
        </a>
        <a
          href="#"
          className="relative rounded-md hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-indigo-600 dark:text-slate-100 focus:z-20 focus:outline-offset-0 md:inline-flex"
        >
          3
        </a>
        <span className="relative rounded-md inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-slate-100 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
          ...
        </span>
        <a
          href="#"
          className="relative rounded-md hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-indigo-600 dark:text-slate-100 focus:z-20 focus:outline-offset-0 md:inline-flex"
        >
          7
        </a>
        <a
          href="#"
          className="relative rounded-md inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-indigo-600 dark:text-slate-100 focus:z-20 focus:outline-offset-0"
        >
          8
        </a>
        <a
          href="#"
          className="relative rounded-md inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-indigo-600 dark:text-slate-100 focus:z-20 focus:outline-offset-0"
        >
          9
        </a>

        <a
          href="#"
          className="relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-indigo-600 dark:text-slate-100 focus:z-20 focus:outline-offset-0 h-10 w-[70px]"
        >
          <span className="sr-only text-slate-700">Next</span>
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-narrow-right"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l14 0"></path>
            <path d="M15 16l4 -4"></path>
            <path d="M15 8l4 4"></path>
          </svg>
          
        </a>
        <a
          href="#"
          className="relative inline-flex items-center rounded-md w-10 h-10 px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-indigo-600 dark:text-slate-100 focus:z-20 focus:outline-offset-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevrons-right"
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
            <path d="M7 7l5 5l-5 5"></path>
            <path d="M13 7l5 5l-5 5"></path>
          </svg>
        </a>
      </nav>
    </div>
  );
};

export default Pagination;
