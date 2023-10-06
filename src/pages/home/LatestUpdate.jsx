import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { BiCommentDetail, BiRadioCircleMarked, BiTimeFive } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";

const LatestUpdate = () => {
  const [updates, setUpdates] = useState([]);
  useEffect(() => {
    fetch("/updates.json")
      .then((res) => res.json())
      .then((data) => setUpdates(data));
  }, []);
  console.log(updates);
  return (
    <div className="rounded-md bg-white shadow-lg py-10">
      <Container>
        <div>
          <h1 className="flex items-center gap-2">
            <BiRadioCircleMarked className="w-7 h-7 animate-ping delay-700"></BiRadioCircleMarked>{" "}
            <span className="font-bold text-2xl">Latest Updates</span>
          </h1>
          <div className="my-3">
            {updates.map((update, i) => (
              <>
                <div key={i} className="flex flex-col md:flex-row justify-center items-center gap-3 p-4 my-4 border-2 border-indigo-500 rounded-md">
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
        </div>
      </Container>
    </div>
  );
};

export default LatestUpdate;
