import React from "react";
import Container from "../../components/Container";
import { FaAngleRight } from "react-icons/fa";

const HelpUs = () => {
  return (
    <div className="rounded-md bg-white shadow-lg my-10">
      <Container>
        <div className="flex flex-col md:flex-row px-5 pt-5">
          <div className="py-10 basis-3/4" >
            <h1 className="text-3xl text-indigo-600 font-bold">
              Help us survive!
            </h1>
            <p className="my-5">We have made it easy for you to download and install softwares; most importantly kept everything free! So please help us maintain the site and server by donating whatever you can.</p>
            <button className="bg-indigo-600 font-semibold  py-1 px-4 text-center flex place-items-center gap-2 rounded-md hover:bg-indigo-700 text-white">Donate <FaAngleRight></FaAngleRight> </button>
          </div>
          <img className=" h-56 mx-auto w-80 basis-1/4 " src="/girl.png" alt="" />
        </div>
      </Container>
    </div>
  );
};

export default HelpUs;
