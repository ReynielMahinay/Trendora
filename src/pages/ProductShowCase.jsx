import React from "react";
import showcaseImages from "../assets/sample-images";

const ProductShowCase = () => {
  return (
    <div className="flex p-10 gap-5 ">
      <div className="grid  grid-cols-3 grid-rows-2">
        {showcaseImages.map((item, index) => (
          <div
            key={index}
            className={`relative group shadow-xl ${
              index === 0 ? "col-span-2" : ""
            } ${index === 3 ? "col-span-2" : ""}`}
          >
            <img
              src={item.src}
              alt={item.name}
              className="h-full w-full object-cover group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 ">
              <button className=" text-white">view</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowCase;
