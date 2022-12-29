import React from "react";
import HeroText from "./HeroText";
import Button from "./Button";

const Hero = () => {
  return (
    <main className="bg-home-mobile min-h-screen flex flex-col items-center justify-center px-home-hero bg-no-repeat bg-cover bg-center bg-fixed gap-20 pt-28 pb-12">
      <HeroText />
      <Button />
    </main>
  );
};

export default Hero;
