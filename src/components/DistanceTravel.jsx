import React from "react";

const DistanceTravel = props => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-barlow-condensed text-sm uppercase">
        {props.title}
      </p>
      <p className="font-bellefair text-[1.75rem] uppercase">
        {props.value}
      </p>
    </div>
  );
};

export default DistanceTravel;
