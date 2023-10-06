import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import TopNote from "../components/TopNote";

const MainLayout = () => {
  return (
    <div className="bg-slate-50 ">
      
      <Navbar></Navbar>
      <div className="pt-24 mt-2">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
