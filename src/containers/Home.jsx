import React from "react";
import { Header } from "../components";

const Home = () => {
  return (
    <div className="min-h-screen bg-home-mobile bg-cover bg-no-repeat md:bg-home-tablet lg:bg-home-desktop">
      <Header />
      <main className="mx-auto flex max-w-screen-xl flex-col items-center gap-20 p-6 md:gap-40 md:px-40 md:pt-28 md:pb-24 lg:grid lg:grid-cols-2 lg:px-28 xl:px-40 xl:pb-32 xl:pt-64">
        <div className="flex flex-col gap-10 text-center lg:text-left">
          <h1 className="uppercase">
            <span className="font-barlow-condensed tracking-[2.7px] md:text-xl md:tracking-[3.38px]">
              So, you want to travel to
            </span>
            <br />
            <span className="font-bellefair text-7xl md:text-9xl">Space</span>
          </h1>
          <p className="max-w-md">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className="lg:self-end lg:justify-self-end rounded-full bg-white py-16 px-[30px] font-bellefair text-xl uppercase leading-none tracking-[1.25px] text-clr-dark md:px-16 md:py-28 md:text-3xl md:tracking-[2px]">
          Explore
        </button>
      </main>
    </div>
  );
};

export default Home;
