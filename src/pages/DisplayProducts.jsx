import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const DisplayProducts = ({ products, addCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerpage, setPostsPerpage] = useState(8);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { cart, setCart } = useOutletContext();

  // If products is null or undefined, show a loading or fallback
  if (!products || !Array.isArray(products)) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <p className="text-xl text-gray-500">Loading products...</p>
      </div>
    );
  }

  // // ✅ Apply category filter first (optional)
  // const  = activeCategory
  //   ? products.filter((product) => product.category === activeCategory)
  //   : products;

  // const filteredProducts = products.filter((product) => {
  //   const matchesCategory = activeCategory
  //     ? product.category === activeCategory
  //     : true;

  //   const matchSearch = product.title
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase());
  //   return matchSearch, matchesCategory;
  // });

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory
      ? product.category.toLowerCase() === activeCategory.toLowerCase()
      : true;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // ✅ Apply pagination next
  const indexOfLastProduct = currentPage * postsPerpage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerpage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  console.log("Search:", searchTerm);
  console.log("Filtered:", filteredProducts.length);

  return (
    <div
      className="flex flex-col justify-between  
    min-h-screen "
    >
      <div className="flex flex-col">
        <div className=" p-10 ">
          <Sidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div></div>

        <div className=" flex flex-col justify-center items-end px-10 py-5 gap-10">
          <Card
            products={currentProducts}
            activeCategory={activeCategory}
            addCart={addCart}
          />
          <Pagination
            setCurrentPage={setCurrentPage}
            totalPosts={filteredProducts.length}
            productsPerPage={postsPerpage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
