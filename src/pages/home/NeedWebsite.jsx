import React from "react";
import { BiGlobe } from "react-icons/bi";
import Container from "../../components/Container";

const NeedWebsite = () => {
  return (
    <div className="rounded-md bg-white shadow-lg py-5">
      <Container>
        <h1 className="flex items-center gap-2">
          {" "}
          <BiGlobe className="w-7 h-7"></BiGlobe>{" "}
          <span className="font-bold text-2xl">Need a Website?</span>
        </h1>
        <p className=" my-5">
          CyberSpace Digital is here to help you shape your dream. List of
          services that we offer...
        </p>
        <div className="flex justify-between">
          <div>
            <ul className="list-disc ml-5">
              <li>Web Development</li>
              <li>Graphic Design</li>
              <li>UI/UX Design</li>
              <li>Video Editing</li>
              <li>IG Marketing</li>
              <li>Boosting</li>
            </ul>
            <button className="bg-indigo-400 text-white font-semibold text-sm py-1 mt-5 rounded-md px-2">
              Contact Us
            </button>
          </div>
          <img className="w-40 h-48" src="/man.png" alt="" />
        </div>
      </Container>
    </div>
  );
};

export default NeedWebsite;
