import React from "react";
import data from "../constants/data.json";
import { Link } from "react-router-dom";

const Button = () => {
  const home = data.home;
  return (
    <Link to="/destination">
      <button className="rounded-[50%] bg-white px-30px py-68px font-bellefair text-xl uppercase tracking-[1.25px] text-clr-dark">
        {home.btnText}
      </button>
    </Link>
  );
};

export default Button;
