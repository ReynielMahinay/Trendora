import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { SquareChevronDown } from "lucide-react";
import ProductShowCase from "./ProductShowCase";

const LandingPage = () => {
  return (
    <div className=" flex justify-center flex-col px-10  text-[#1E1E1E] pt-20">
      <div className="flex flex-1 flex-col justify-center items-start ">
        <p className="uppercase font-dmsans font-extrabold text-[205px] leading-40">
          Trendora
        </p>
        <p className="font-dmsans font-bold text-[60px] leading-20">
          Trends for Him, Her & Home -
        </p>
        <p className="text-[40px] font-bold font-dmsans leading-10">
          All in One Click!
        </p>
      </div>
      <div className="flex justify-end items-end">
        <Link to="products">
          <Button title="Shop Now" />
        </Link>
      </div>
      <div className="flex justify-center items-center pt-5">
        <div className="animate-bounce">
          <SquareChevronDown size={32} />
        </div>
      </div>
      <div>
        <ProductShowCase />
      </div>
    </div>
  );
};

export default LandingPage;
