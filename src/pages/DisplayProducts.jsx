import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const DisplayProducts = () => {
  return (
    <div className="bg-gradient-to-t from-[#fff1eb] to-[#ace0f9]">
      <NavBar />

      <div>
        <Sidebar />
      </div>
      <div></div>
    </div>
  );
};

export default DisplayProducts;
