import React from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full mx-auto z-10 pb-10 ">
      <Container>
        <footer className="footer p-10 bg-base-100 text-base-content rounded-md">
          <aside>
            <Link
              to="/"
              className="normal-case text-xl flex items-center gap-2"
            >
              <img className="h-10 w-10" src="/cs-icon.svg" alt="" />
              <span className="text-indigo-600 font-semibold text-4xl">CYBERSPACE</span>
            </Link>
            <p>
            Home of pre-activated Windows and Softwares <br></br> One click download and installation.<br></br> Always stay updated with us. <br></br> <span className="flex gap-2">Maintained with <BiHeart className="w-3 h-3 ping-icon"></BiHeart> by TeamCS</span>
            </p>
          </aside>
          <nav>
            <header className="footer-title">Home</header>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Shop</a>
            <a className="link link-hover">Account</a>
            <a className="link link-hover">Pricing</a>
          </nav>
          <nav>
            <header className="footer-title">Site Info</header>
            <a className="link link-hover">Support</a>
            <a className="link link-hover">FAQ</a>
            <a className="link link-hover">DMCA</a>
            <a className="link link-hover">TOS</a>
          </nav>
          <nav>
            <header className="footer-title">Social</header>
            <a className="link link-hover">Terms of use</a>
            
            <a className="link link-hover mt-7">2017 -  2023 © CyberSpace</a>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
