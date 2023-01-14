import React from "react";

const NumberedHeading = (props) => {
  return (
    <h1 className="text-center font-barlow-condensed text-base uppercase tracking-[2.7px] md:text-left md:text-xl lg:text-[1.75rem]">
      <span className="mr-4 font-bold text-white opacity-25" aria-hidden="true">
        {props.num}
      </span>
      {props.text}
    </h1>
  );
};

export default NumberedHeading;
