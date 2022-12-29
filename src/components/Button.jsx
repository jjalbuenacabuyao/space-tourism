import React from "react";
import data from "../constants/data.json";
import { Link } from "react-router-dom";

const Button = () => {
  const home = data.home;
  return (
    <Link to="/destination">
      <button className="text-xl tracking-[1.25px] uppercase px-30px py-68px font-bellefair text-clr-dark bg-white rounded-[50%]">
        {home.btnText}
      </button>
    </Link>
  );
};

export default Button;
