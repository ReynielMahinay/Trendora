import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import ProductFetcher from "../components/ProductFetcher";

const DisplayProducts = ({ products }) => {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-t from-[#fff1eb] to-[#ace0f9] ">
      <div>
        <NavBar title="TRENDORA" />
      </div>
      <div className="pt-10">
        <p>test</p>
      </div>
      <div className="flex ">
        <div className="w-[20%] border border-t-emerald-950">
          <Sidebar />
        </div>
        <div className="w-[80%] border border-amber-600">
          <Card products={products} />
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
