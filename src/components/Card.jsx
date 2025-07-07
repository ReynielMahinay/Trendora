import React from "react";
import ProductFetcher from "./ProductFetcher";
import { radioPropDefs } from "@radix-ui/themes/props";

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
    <div className="grid grid-cols-3 grid-rows-auto gap-5 p-10">
      {products.map((products) => (
        <div
          key={products.id}
          className="bg-[#fff1eb] h-[400px] w-full shadow-xl"
        >
          <img src={products.image} alt={products.title} className="w-[50px]" />
          <p>{products.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
