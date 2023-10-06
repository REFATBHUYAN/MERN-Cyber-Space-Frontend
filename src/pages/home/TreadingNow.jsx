import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { BiCoffee, BiCommentDetail, BiRadioCircleMarked, BiTimeFive } from "react-icons/bi";
import { FaAngleRight, FaRegEye } from "react-icons/fa";

const TreadingNow = () => {
    const [updates, setUpdates] = useState([]);
    useEffect(() => {
      fetch("/updates.json")
        .then((res) => res.json())
        .then((data) => setUpdates(data));
    }, []);
    console.log(updates);
    return (
      <div className="rounded-md bg-white shadow-lg py-10 ">
        <Container>
          <div className="">
            <h1 className="flex items-center gap-2"> 
              <BiCoffee className="w-7 h-7 ping-icon"></BiCoffee>{" "}
              <span className="font-bold text-2xl">Trending Now</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
              {updates.map((update, i) => (
                <>
                  <div key={i} className="flex flex-col md:flex-row justify-center items-center  gap-5  my-6">
                    <img
                      className="h-40 w-40 rounded-md"
                      src={update.img}
                      alt=""
                    />
                    <div className="flex flex-col justify-between">
                      <div className="flex gap-2">
                        <p className="bg-indigo-500 text-white rounded-md px-1 text-sm w-20 text-center">
                          {update.version}
                        </p>
                        <button className="bg-indigo-200 text-indigo-600 uppercase rounded-md px-1 text-sm w-20 text-center">
                          {update.category}
                        </button>
                      </div>
                      <h1 className="font-semibold text-lg">{update.title}</h1>
                      <p>{update.descriptions}</p>
                      <div className="md:flex  md:gap-3">
                        <p className="flex items-center gap-2 text-sm"> <BiTimeFive></BiTimeFive> {update.time} years ago</p>
                        <p className="flex items-center gap-2 text-sm"> <BiCommentDetail></BiCommentDetail> {update.comments} Comments</p>
                      <p className="flex items-center gap-2 text-sm"> <FaRegEye></FaRegEye> {update.view} Views</p>
                        
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <button className="bg-indigo-100 font-semibold mx-auto py-1 px-2 flex place-items-center gap-2 rounded-md hover:bg-indigo-600 hover:text-white">View More <FaAngleRight></FaAngleRight> </button>
          </div>
        </Container>
      </div>
    );
};

export default TreadingNow;
