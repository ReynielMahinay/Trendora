import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const DisplayProducts = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerpage, setPostsPerpage] = useState(8);
  const [activeCategory, setActiveCategory] = useState(null);
  // If products is null or undefined, show a loading or fallback
  if (!products || !Array.isArray(products)) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <p className="text-xl text-gray-500">Loading products...</p>
      </div>
    );
  }

  // ✅ Apply category filter first (optional)
  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  // ✅ Apply pagination next
  const indexOfLastProduct = currentPage * postsPerpage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerpage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div
      className="flex flex-col justify-between  
    min-h-screen "
    >
      <NavBar title="TEDR" bgColor="bg-white" />

      <div className="flex flex-col">
        <div className=" p-10 ">
          <Sidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        <div></div>

        <div className=" flex flex-col justify-center items-end px-10 py-5 gap-10">
          <Card products={currentProducts} activeCategory={activeCategory} />
          <Pagination
            setCurrentPage={setCurrentPage}
            totalPosts={filteredProducts.length}
            productsPerPage={postsPerpage}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DisplayProducts;
