import React from "react";

const NumberedHeading = ({ index, title }) => {
  return (
    <h1 className="flex justify-center gap-4 pb-8 font-barlow-condensed tracking-[2.7px] md:justify-start md:pl-10 md:pt-10 md:pb-16 md:text-xl">
      <span className="font-bold text-white/25">0{index}</span>
      <span className="uppercase">{title}</span>
    </h1>
  );
};

export default NumberedHeading;
