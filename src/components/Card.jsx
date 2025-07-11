import React from "react";
import { ShoppingCart, ShoppingBag, ArrowRight } from "lucide-react";
import { preview } from "vite";

const Card = ({ products, activeCategory }) => {
  console.log(activeCategory);
  if (!products) {
    return <p>Loading products...</p>;
  }

  // Show a message if products is empty
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-5 w-full">
      {products.map((products) => (
        <div
          key={products.id}
          className="relative flex flex-col justify-between items-start bg-white  w-full shadow-xl p-5 gap-5 rounded-sm"
        >
          <div className="flex justify-center items-center w-full">
            <img
              src={products.image}
              alt={products.title}
              className="h-50 w-50 object-scale-down"
            />
          </div>

          <div className="font-dmsans">
            <p className="text-sm">{products.title}</p>
            <p className="text-sm text-gray-500">${products.price}</p>
          </div>

          <div className="flex flex-col gap-2  w-full">
            <div className="flex flex-row  justify-between items-center gap-1">
              <button className="uppercase font-dmsans text-[12px] flex gap-2  bg-[#3867ff] p-2 w-full text-center rounded-sm text-white justify-center items-center hover:bg-white hover:text-[#1e1e1e] border hover:border-[#3867ff]">
                Add to cart
                <ShoppingCart size={16} />
              </button>
              <span className="border border-[#b4b4b4] px-2 py-[9px] rounded-sm text-[#3867ff] hover:text-white hover:bg-[#3867ff] hover:border-white">
                <ArrowRight size={16} strokeWidth={3} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
