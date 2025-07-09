import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, CircleUser, Search } from "lucide-react";

const NavBar = ({ title, bgColor, iconColor, flow }) => {
  return (
    <div
      className={`navbar ${bgColor} ${flow} shadow-[0_5px_5px_-3px_rgba(0,0,0,0.1)]`}
    >
      <Link to="/" className="font-dmsans text-2xl font-bold text-[#1E1E1E]">
        {title}
      </Link>
      <div className="flex items-center justify-center gap-4 capitalize">
        <Link to="/" className="font-dmsans text-[#1e1e1e]">
          Home
        </Link>
        <Link to="/products" className="font-dmsans text-[#1e1e1e]">
          shop
        </Link>
      </div>
      <div className={`flex gap-3 ${iconColor}`}>
        <Link to="/cart">
          <ShoppingCart />
        </Link>

        <CircleUser />
      </div>
    </div>
  );
};

export default NavBar;
