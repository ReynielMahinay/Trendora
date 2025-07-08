import { React, useState } from "react";

const Sidebar = ({ activeCategory, setActiveCategory }) => {
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
    <div className="py-10">
      <p className="font-dmsans capitalize font-semibold text-2xl">category</p>
      {categories.map((cat, index) => (
        <div className="flex flex-row gap-5">
          <div className="flex  justify-center items-center gap-1">
            <input
              type="checkbox"
              checked={activeCategory === cat.name}
              onChange={() => handleChange(cat.name)}
            />
            <label key={index} className="uppercase text-[12px]">
              {cat.name}
            </label>
          </div>
        </div>
      ))}

      <p>check is {activeCategory || "none"}</p>
    </div>
  );
};

export default Sidebar;
