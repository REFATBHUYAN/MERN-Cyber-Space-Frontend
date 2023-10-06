import React from "react";
import Container from "../../components/Container";
import { BiStar } from "react-icons/bi";

const EssentialPost = () => {
  return (
    <div className="rounded-md bg-white shadow-lg py-5">
      <Container>
        <h1 className="flex items-center gap-2">
          {" "}
          <BiStar className="w-7 h-7"></BiStar>{" "}
          <span className="font-bold text-2xl">Essential Posts</span>
        </h1>
        <div>
          <div className="flex  items-center gap-3 p-4 my-4 border-2 border-indigo-500 rounded-md">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg">
                Internet Download Manager
              </h1>
              <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm text-center">
                25 SOFTWARES
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 p-4 my-4 border-2 border-indigo-500 rounded-md">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg">
                Internet Download Manager
              </h1>
              <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm text-center">
                25 SOFTWARES
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 p-4 my-4 border-2 border-indigo-500 rounded-md">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg">
                Internet Download Manager
              </h1>
              <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm text-center">
                25 SOFTWARES
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 p-4 my-4 border-2 border-indigo-500 rounded-md">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg">
                Internet Download Manager
              </h1>
              <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm text-center">
                25 SOFTWARES
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EssentialPost;
