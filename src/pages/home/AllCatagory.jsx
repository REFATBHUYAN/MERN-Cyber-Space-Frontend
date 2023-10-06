import React from 'react';
import { BiCube } from 'react-icons/bi';
import Container from '../../components/Container';

const AllCatagory = () => {
    return (
        <div className="rounded-md bg-white shadow-lg py-6">
      <Container>
        <h1 className="flex items-center gap-2">
          <BiCube className="w-7 h-7"></BiCube>
          <span className="font-bold text-2xl">All Categories</span>
        </h1>
        <div>
          <div className="flex  items-center gap-3 p-4 my-4 border-2 border-indigo-500 rounded-md">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg">Internet Download Manager</h1>
              <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm text-center">
              25 SOFTWARES
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 p-4 my-4 border-2 border-indigo-500 rounded-md">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg">Internet Download Manager</h1>
              <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm text-center">
              25 SOFTWARES
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 p-4 my-4 border-2 border-indigo-500 rounded-md">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg">Internet Download Manager</h1>
              <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm text-center">
              25 SOFTWARES
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 p-4 mt-4 border-2 border-indigo-500 rounded-md">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg">Internet Download Manager</h1>
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

export default AllCatagory;