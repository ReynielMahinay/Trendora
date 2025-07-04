import React from "react";
import { ShoppingCart, CircleUser } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navbar ">
      <p className="font-poppins text-2xl">Trendora</p>
      <div className="flex gap-3">
        <ShoppingCart />
        <CircleUser />
      </div>
    </div>
  );
};

export default NavBar;
