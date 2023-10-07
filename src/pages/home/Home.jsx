import React from "react";
import Banner from "./Banner";
import Popular from "./Popular";
import Container from "../../components/Container";
import LatestUpdate from "./LatestUpdate";
import PopularPost from "./PopularPost";
import NeedWebsite from "./NeedWebsite";
import AllCatagory from "./AllCatagory";
import RecentComments from "./RecentComments";
import EssentialPost from "./EssentialPost";
import EditorsChoice from "./EditorsChoice";
import TreadingNow from "./TreadingNow";
import HelpUs from "./HelpUs";
import Features from "./Features";
import Banner2 from "./Banner2";
import SliderCatagory from "./SliderCatagory";

const Home = () => {
  return (
    <>
      <div>
        <>
          <div>
            <Banner2></Banner2>
          </div>
          <div className="w-full bg-base-100">
            <Container>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="md:w-2/3">
                  <LatestUpdate></LatestUpdate>
                </div>
                <div className="md:w-1/3 flex flex-col gap-5">
                  <PopularPost></PopularPost>
                  {/* <NeedWebsite></NeedWebsite>
                  <AllCatagory></AllCatagory>
                  <EssentialPost></EssentialPost> */}
                  <RecentComments></RecentComments>
                </div>
              </div>
            </Container>
          </div>
          <EditorsChoice></EditorsChoice>
          <TreadingNow></TreadingNow>
          <HelpUs></HelpUs>
          <Features></Features>
        </>
      </div>
    </>
  );
};

export default Home;
