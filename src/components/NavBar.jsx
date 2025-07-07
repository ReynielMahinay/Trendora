import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, CircleUser, Search } from "lucide-react";

const NavBar = ({ title }) => {
  return (
    <div className="navbar ">
      <Link to="/">
        <a className="font-poppins text-2xl">{title}</a>
      </Link>
      <div className="flex gap-3">
        <Search />
        <ShoppingCart />
        <CircleUser />
      </div>
    </div>
  );
};

export default NavBar;
