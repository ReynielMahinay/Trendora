import { React, useState } from "react";
import { Search } from "lucide-react";

const Sidebar = ({
  activeCategory,
  setActiveCategory,
  searchTerm,
  setSearchTerm,
  setCurrentPage,
}) => {
  const categories = [
    { name: "men's clothing" },
    { name: "women's clothing" },
    { name: "jewelery" },
    { name: "electronics" },
  ];

  const handleChange = (name) => {
    setActiveCategory((prev) => (prev === name ? null : name));
  };

  return (
    <div className="flex flex-1 gap-5 border-2 border-[#1E1E1E] p-5  bg-[#1E1E1E] ">
      <div className="flex flex-1 relative w-full border-white">
        <input
          type="text"
          className="border-2 border-white px-5 relative w-full text-white "
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <Search className="absolute right-1 top-3" color="white" />
      </div>

      {categories.map((cat, index) => (
        <div className="group relative flex justify-center items-center overflow-hidden">
          <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400"></span>
          <button
            onClick={() => {
              handleChange(cat.name);
              setCurrentPage(1);
            }}
            className={`border-2 border-white  p-2 font-dmsans relative z-10  ${
              activeCategory === cat.name
                ? "bg-white text-[#1E1E1E]"
                : "text-white group-hover:text-black transition-colors duration-400"
            }`}
          >
            {cat.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
