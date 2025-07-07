import React from "react";

function Button({ title }) {
  return (
    <button className="relative group cursor-pointer border-2 border-[#1E1E1E] px-6 py-3 text-white font-dmsans overflow-hidden">
      <span
        className="absolute inset-0 bg-[#1E1E1E] translate-x-[-100%] group-hover:translate-x-0
      transition-transform duration-400"
      ></span>
      <span className="relative z-10 text-[#1E1E1E] text-xl group-hover:text-white transition-colors duration-400">
        {title}
      </span>
    </button>
  );
}

export default Button;
