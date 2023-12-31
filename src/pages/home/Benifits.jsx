import React from "react";
import Container from "../../components/Container";

const Benifits = () => {
  return (
    <div className="pt-20 pb-20 bg-slate-50 dark:bg-slate-700">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col justify-center items-center gap-3 text-slate-400 hover:text-indigo-700 ">
            <div className="h-20 w-20 rounded-md bg-slate-100 p-6 text-indigo-700 hover:bg-indigo-700 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-shield-lock h-8 w-8   "
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
                <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M12 12l0 2.5"></path>
              </svg>
            </div>
            <h1 className="font-semibold text-lg text-slate-700 hover:text-indigo-700 dark:text-slate-50 dark:hover:text-indigo-700">
              100% Secured
            </h1>
            <p className="hover:text-slate-700 dark:hover:text-indigo-700">
              Virus free downloads from our server so that you don’t get
              malwares.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 text-slate-400 hover:text-indigo-700 ">
            <div className="h-20 w-20 rounded-md bg-slate-100 p-6 text-indigo-700 hover:bg-indigo-700 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-tabler"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 9l3 3l-3 3"></path>
                <path d="M13 15l3 0"></path>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
              </svg>
            </div>
            <h1 className="font-semibold text-lg text-slate-700 hover:text-indigo-700 dark:text-slate-50 dark:hover:text-indigo-700">
              Easy Installation
            </h1>
            <p className="hover:text-slate-700 dark:hover:text-indigo-700">
              You just have to click once and the software will auto install
              itself.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 text-slate-400 hover:text-indigo-700 ">
            <div className="h-20 w-20 rounded-md bg-slate-100 p-6 text-indigo-700 hover:bg-indigo-700 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-settings-automation"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                <path d="M10 9v6l5 -3z"></path>
              </svg>
            </div>
            <h1 className="font-semibold text-lg text-slate-700 hover:text-indigo-700 dark:text-slate-50 dark:hover:text-indigo-700">
              Auto Activation
            </h1>
            <p className="hover:text-slate-700 dark:hover:text-indigo-700">
              The software will be auto activated during the installation.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 text-slate-400 hover:text-indigo-700 ">
            <div className="h-20 w-20 rounded-md bg-slate-100 p-6 text-indigo-700 hover:bg-indigo-700 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-headset"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 14v-3a8 8 0 1 1 16 0v3"></path>
                <path d="M18 19c0 1.657 -2.686 3 -6 3"></path>
                <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
                <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
              </svg>
            </div>
            <h1 className="font-semibold text-lg text-slate-700 dark:text-slate-50 dark:hover:text-indigo-700">
              Admin Support
            </h1>
            <p className="hover:text-slate-700 dark:hover:text-indigo-700">
              24/7 Admin support exclusively for our Pro users only.
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <div
          className="hero min-h-[300px] rounded-md bg-slate-100 dark:bg-slate-800 mt-20"
          style={{
            backgroundImage: "url(https://i.ibb.co/HYxjFfs/hero-bg.png)",
          }}
        >
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-[670px]">
              <h1 className="mb-5 text-3xl font-bold text-slate-700 dark:text-slate-50">
                Start your pro plan today!
              </h1>
              <p className="mb-5 text-slate-400">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary bg-indigo-700 capitalize">
                Get Started Now{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-narrow-right"
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
                  <path d="M5 12l14 0"></path>
                  <path d="M15 16l4 -4"></path>
                  <path d="M15 8l4 4"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Benifits;
