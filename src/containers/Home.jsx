import React from "react";
import { Header } from "../components";

const Home = () => {
  return (
    <div className="min-h-screen bg-home-mobile bg-cover bg-no-repeat">
      <Header />
      <main className="flex flex-col items-center gap-20 p-6">
        <div className="flex flex-col gap-10 text-center">
          <h1 className="uppercase">
            <span className="font-barlow-condensed tracking-[2.7px]">
              So, you want to travel to
            </span>
            <br />
            <span className="font-bellefair text-7xl">Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className="relative rounded-full bg-white py-16 px-[30px] font-bellefair text-xl uppercase leading-none tracking-[1.25px] text-clr-dark transition-all">
          Explore
        </button>
      </main>
    </div>
  );
};

export default Home;
