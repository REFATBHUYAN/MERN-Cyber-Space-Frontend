import React from "react";
import { BiBoltCircle } from "react-icons/bi";
import Container from "../../components/Container";

const PopularPost = () => {
  return (
    <div className=" py-10 text-slate-700">
      <Container>
        <h1 className="flex items-center gap-2">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-bolt"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
          </svg>
          <span className="font-bold text-3xl">Trending Now</span>
        </h1>
        <div>
          <div className="flex  items-center gap-3 p-4 my-4">
            <img className="w-20 h-20 rounded-md" src="/idm.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-blue-700 mb-2">
                Internet Download Manager
              </h1>
              <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                WEB
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 p-4 my-4">
            <img className="w-20 h-20 rounded-md" src="/idm.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-blue-700 mb-2">
                Internet Download Manager
              </h1>
              <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                WEB
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 p-4 my-4">
            <img className="w-20 h-20 rounded-md" src="/idm.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-blue-700 mb-2">
                Internet Download Manager
              </h1>
              <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                WEB
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 p-4 my-4">
            <img className="w-20 h-20 rounded-md" src="/idm.png" alt="" />
            <div >
              <h1 className="font-semibold text-lg hover:text-blue-700 mb-2">
                Internet Download Manager
              </h1>
              <button className="bg-green-50 text-green-700 uppercase rounded-md px-1 text-xs text-center border border-green-100">
                WEB
              </button>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default PopularPost;
