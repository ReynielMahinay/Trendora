import { Button } from "@radix-ui/themes";
import { buttonPropDefs } from "@radix-ui/themes/props";
import React from "react";

const Pagination = ({
  totalPosts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / productsPerPage); i++) {
    pages.push(i);
  }
  // const handlePrev = () => {
  //   if (currentPage > 1) setCurrentPage(currentPage - 1);
  // };

  // const handleNext = () => {
  //   if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  // };

  // const handlePageClick = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`${
              page === currentPage ? "bg-[#3867ff] text-white" : "bg-white"
            } px-3 py-1 border border-gray-200 shadow-sm`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
