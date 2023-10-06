import React from 'react';
import Container from '../../components/Container';
import { BiSpa } from 'react-icons/bi';

const EditorsChoice = () => {
    return (
        <div className="rounded-md bg-white shadow-lg py-5 my-10">
      <Container>
        <h1 className="flex items-center gap-2">
          {" "}
          <BiSpa className="w-7 h-7"></BiSpa>{" "}
          <span className="font-bold text-2xl">Editor's Choice</span>
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
          <div className="flex  items-center gap-3 ">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg hover:text-indigo-600">
                Internet Download Manager
              </h1>
              <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm text-center">
                25 SOFTWARES
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 ">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg hover:text-indigo-600">
                Internet Download Manager
              </h1>
              <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm text-center">
                25 SOFTWARES
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 ">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg hover:text-indigo-600">
                Internet Download Manager
              </h1>
              <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm text-center">
                25 SOFTWARES
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 ">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg hover:text-indigo-600">
                Internet Download Manager
              </h1>
              <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm text-center">
                25 SOFTWARES
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 ">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg hover:text-indigo-600">
                Internet Download Manager
              </h1>
              <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm text-center">
                25 SOFTWARES
              </button>
            </div>
          </div>
          <div className="flex  items-center gap-3 ">
            <img className="w-14 h-14 rounded-md" src="/refat.png" alt="" />
            <div>
              <h1 className="font-semibold text-lg hover:text-indigo-600">
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

export default EditorsChoice;