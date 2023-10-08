import React from "react";

import Container from "../../components/Container";
import LatestUpdate from "./LatestUpdate";
import PopularPost from "./PopularPost";
import RecentComments from "./RecentComments";
import EditorsChoice from "./EditorsChoice";
import Banner2 from "./Banner2";
import BusinessSection from "./BusinessSection";
import EssentialSoft from "./EssentialSoft";
import Benifits from "./Benifits";

const Home = () => {
  return (
    <>
      <div>
        <>
          <div className="bg-no-repeat bg-cover mx-auto" style={{
        backgroundImage: "url(https://i.ibb.co/HYxjFfs/hero-bg.png)",
      }}>
            <Banner2></Banner2>
          </div>
          <div className="w-full bg-slate-50 dark:bg-slate-700 py-16">
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
          <BusinessSection></BusinessSection>
          <EssentialSoft></EssentialSoft>
          <Benifits></Benifits>
          {/* <TreadingNow></TreadingNow>
          <HelpUs></HelpUs>
          <Features></Features> */}
        </>
      </div>
    </>
  );
};

export default Home;
