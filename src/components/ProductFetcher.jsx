import { React, useState, useEffect } from "react";
import DisplayProducts from "../pages/DisplayProducts";

const ProductFetcher = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
      });
  }, []);

  return <DisplayProducts products={products} />;
};

export default ProductFetcher;
