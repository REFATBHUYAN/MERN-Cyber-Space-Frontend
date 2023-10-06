import React from "react";
import { BiCommentDots } from "react-icons/bi";
import Container from "../../components/Container";

const RecentComments = () => {
  return (
    <div className="rounded-md bg-white shadow-lg py-5">
      <Container>
        <h1 className="flex items-center gap-2">
          {" "}
          <BiCommentDots className="w-7 h-7"></BiCommentDots>{" "}
          <span className="font-bold text-2xl">Recent Comments</span>
        </h1>
        <div>
          <div className="flex  items-center gap-3 p-4 my-4 border-2 border-indigo-500 rounded-md">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <div className="flex gap-3">
                <h1 className="font-semibold text-lg">Tanz</h1>
                <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm w-20 text-center">
                  WINDOWS
                </button>
              </div>
              <p>On Request Thread</p>
            </div>
          </div>
          <div className="flex  items-center gap-3 p-4 my-4 border-2 border-indigo-500 rounded-md">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <div className="flex gap-3">
                <h1 className="font-semibold text-lg">Tanz</h1>
                <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm w-20 text-center">
                  WINDOWS
                </button>
              </div>
              <p>On Request Thread</p>
            </div>
          </div>
          <div className="flex  items-center gap-3 p-4 my-4 border-2 border-indigo-500 rounded-md">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <div className="flex gap-3">
                <h1 className="font-semibold text-lg">Tanz</h1>
                <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm w-20 text-center">
                  WINDOWS
                </button>
              </div>
              <p>On Request Thread</p>
            </div>
          </div>
          <div className="flex  items-center gap-3 p-4 my-4 border-2 border-indigo-500 rounded-md">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <div className="flex gap-3">
                <h1 className="font-semibold text-lg">Tanz</h1>
                <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm w-20 text-center">
                  WINDOWS
                </button>
              </div>
              <p>On Request Thread</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RecentComments;
