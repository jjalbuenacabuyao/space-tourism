import React from "react";
import data from "../constants/data.json";
import { Link } from "react-router-dom";

const Button = () => {
  const home = data.home;
  return (
    <Link to="/destination">
      <button className="rounded-[50%] bg-white px-btn-px-m py-btn-py-m font-bellefair text-xl uppercase tracking-[1.25px] text-clr-dark md:text-[2rem] md:btn-px-md md:btn-py-md">
        {home.btnText}
      </button>
    </Link>
  );
};

export default Button;
