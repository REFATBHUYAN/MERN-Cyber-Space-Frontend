import React from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This provides a smooth scroll animation
    });
  };
  return (
    <div className="w-full mx-auto pb-10 bg-[#1E293B] relative">
      <Container>
        <footer className="footer p-10 text-slate-400  rounded-md">
          <aside>
            <Link
              to="/"
              className="normal-case text-xl flex items-center gap-2"
            >
              <img className="h-10 w-10" src="/cs-icon.svg" alt="" />
              <span className="text-indigo-600 font-semibold text-4xl font-unica">
                CYBERSPACE
              </span>
            </Link>
            <p>
              Home of pre-activated Windows and Softwares. One <br /> click
              download and installation for the most popular <br /> softwares.
              Always stay updated with us.
              <br />
              <span className="flex gap-1 mt-4">
                Maintained with{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-heart"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                </svg>{" "}
                by Team#CS!
              </span>
            </p>
          </aside>
          <nav>
            <header className="footer-title text-base-100">Company</header>
            <a className="link no-underline hover:text-indigo-700">About Us</a>
            <a className="link no-underline hover:text-indigo-700">Account</a>
            <a className="link no-underline hover:text-indigo-700">Pricing</a>
            <a className="link no-underline hover:text-indigo-700">Donate</a>
          </nav>
          <nav>
            <header className="footer-title text-base-100">SISTER</header>
            <a className="link no-underline hover:text-indigo-700">World</a>
            <a className="link no-underline hover:text-indigo-700">Blog</a>
            <a className="link no-underline hover:text-indigo-700">Shop</a>
            <a className="link no-underline hover:text-indigo-700">Digital</a>
          </nav>
          <nav>
            <header className="footer-title text-base-100">HELP CENTER</header>
            <a className="link no-underline hover:text-indigo-700">Contact</a>
            <a className="link no-underline hover:text-indigo-700">Support</a>
            <a className="link no-underline hover:text-indigo-700">FAQs</a>
            <a className="link no-underline hover:text-indigo-700">DMCA</a>
          </nav>
          <nav>
            <header className="footer-title text-base-100">POLICY</header>
            <a className="link no-underline hover:text-indigo-700">
              Terms of Service
            </a>
            <a className="link no-underline hover:text-indigo-700">
              Privacy Policy
            </a>
            <a className="link no-underline hover:text-indigo-700">
              Cookies Policy
            </a>
            <a className="link no-underline hover:text-indigo-700">DMCA</a>
          </nav>
        </footer>
        <div className="divider bg-[#334155] h-[1px] my-0"></div>
        <footer className="footer items-center p-4 text-slate-400">
          <aside className="items-center grid-flow-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-copyright"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173"></path>
            </svg>
            <p>2017-2023 CyberSpace. All rights reserved.</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-white">
            <a className="h-10 cursor-pointer w-10 flex items-center justify-center rounded-md bg-slate-700 hover:bg-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-users rounded-md"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
              </svg>
            </a>
            <a className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-md bg-slate-700 hover:bg-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-facebook"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
              </svg>
            </a>
            <a className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-md bg-slate-700 hover:bg-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-youtube"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
                <path d="M10 9l5 3l-5 3z"></path>
              </svg>
            </a>
            <a className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-md bg-slate-700 hover:bg-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-instagram"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16.5 7.5l0 .01"></path>
              </svg>
            </a>
            <a className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-md bg-slate-700 hover:bg-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-twitter"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
              </svg>
            </a>
            <a className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-md bg-slate-700 hover:bg-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-telegram"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
              </svg>
            </a>
          </nav>
        </footer>
      </Container>
      <button onClick={scrollToTop}  className="h-10 absolute right-6 bottom-14 cursor-pointer w-10 flex items-center justify-center rounded-md bg-slate-400 hover:bg-indigo-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-up text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6 15l6 -6l6 6"></path>
        </svg>
      </button>
    </div>
  );
};

export default Footer;
