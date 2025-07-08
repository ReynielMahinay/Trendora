import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <button
        onClick={handlePrev}
        className="bg-white px-2 py-1.5 border border-gray-200 rounded-l-sm shadow-sm"
      >
        <ChevronLeft color="#9f9fa9" size={20} />
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => handlePageClick(page)}
            className={`${
              page === currentPage
                ? "bg-[#3867ff] text-white border-none"
                : "bg-white"
            } px-3 py-1 border border-gray-200 shadow-sm`}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={handleNext}
        className="bg-white px-2 py-1.5 border border-gray-200 rounded-r-sm shadow-sm"
      >
        <ChevronRight color="#9f9fa9" size={20} />
      </button>
    </div>
  );
};

export default Pagination;
