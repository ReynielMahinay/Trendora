import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const DisplayProducts = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerpage, setPostsPerpage] = useState(6);

  // If products is null or undefined, show a loading or fallback
  if (!products || !Array.isArray(products)) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <p className="text-xl text-gray-500">Loading products...</p>
      </div>
    );
  }

  const indexOfLastProduct = currentPage * postsPerpage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerpage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div
      className="flex flex-col justify-between bg-gradient-to-t from-[#fff1eb] to-[#ace0f9] 
    min-h-screen "
    >
      <NavBar title="TRENDORA" />

      <div className="flex p-10">
        <div className="w-[20%]">
          <Sidebar />
        </div>

        <div className="w-[80%] flex flex-col justify-center items-end p-10 gap-10">
          <Card products={currentProducts} />
          <Pagination
            setCurrentPage={setCurrentPage}
            totalPosts={products.length}
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
