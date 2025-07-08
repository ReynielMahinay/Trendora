import React from "react";
import { ShoppingCart, ShoppingBag, ArrowRight } from "lucide-react";

const Card = ({ products }) => {
  console.log(products);
  if (!products) {
    return <p>Loading products...</p>;
  }

  // Show a message if products is empty
  if (products.length === 0) {
    return <p>No products available.</p>;
  }
  return (
    <div className="grid grid-cols-3 grid-rows-auto gap-5 w-full">
      {products.map((products) => (
        <div
          key={products.id}
          className="relative flex flex-col justify-between items-center bg-white  w-full shadow-xl p-5 gap-5 rounded-sm"
        >
          <img
            src={products.image}
            alt={products.title}
            className="h-50 w-50 object-scale-down"
          />
          <p className="text-sm">{products.title}</p>
          <div className="flex flex-col gap-2  w-full">
            <div className="flex flex-row  justify-between items-center gap-1">
              <button className="uppercase font-dmsans text-[12px] flex gap-2  bg-[#3867ff] p-2 w-full text-center rounded-sm text-white justify-center items-center">
                Add to cart
                <ShoppingCart color="#ffffff" size={16} />
              </button>
              <span className="border border-[#b4b4b4] p-2 rounded-sm">
                <ArrowRight color="#3867ff" size={16} strokeWidth={3} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
