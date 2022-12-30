import React from "react";

const NumberedHeading = (props) => {
  return (
    <h1 className="text-center font-barlow-condensed text-base uppercase tracking-[2.7px]">
      <span className="mr-4 font-bold" aria-hidden="true">
        {props.num}
      </span>
      {props.text}
    </h1>
  );
};

export default NumberedHeading;
