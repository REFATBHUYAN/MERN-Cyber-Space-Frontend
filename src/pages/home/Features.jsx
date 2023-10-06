import React from "react";
import Container from "../../components/Container";
import { BiCheckShield, BiTerminal, BiCog } from "react-icons/bi";

const Features = () => {
  return (
    <div className="rounded-md bg-white shadow-lg my-10 ">
      <Container>
        <div className="flex flex-col md:flex-row px-5 py-5 md:justify-center md:items-center gap-5">
          <div className="flex  items-center gap-3 ">
            <p className="bg-lime-200 rounded-md h-14 w-14 flex items-center">
              <BiCheckShield className="w-7 h-7 mx-auto text-lime-600"></BiCheckShield>
            </p>
            <div>
              <h1 className="font-semibold text-lg">100% Secured</h1>
              <p className=" text-sm">Virus free downloads from our server</p>
            </div>
          </div>
          <div className="flex  items-center gap-3 ">
            <p className="bg-cyan-200 rounded-md h-14 w-14 flex items-center">
              <BiTerminal className="w-7 h-7 mx-auto text-cyan-600"></BiTerminal>
            </p>
            <div>
              <h1 className="font-semibold text-lg">Easy Installation</h1>
              <p className=" text-sm">Just click once & will auto installation</p>
            </div>
          </div>
          <div className="flex  items-center gap-3 ">
            <p className="bg-orange-200 rounded-md h-14 w-14 flex items-center">
              <BiCog className="w-7 h-7 mx-auto text-orange-600"></BiCog>
            </p>
            <div>
              <h1 className="font-semibold text-lg">Auto Activation</h1>
              <p className=" text-sm">All our softwares are pre-activated</p>
            </div>
          </div>
          <div className="flex  items-center gap-3 ">
            <p className="bg-red-200 rounded-md h-14 w-14 flex items-center">
              <BiCheckShield className="w-7 h-7 mx-auto text-red-600"></BiCheckShield>
            </p>
            <div>
              <h1 className="font-semibold text-lg">Admin Support</h1>
              <p className=" text-sm">24/7 Admin support only for Pro users</p>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default Features;
