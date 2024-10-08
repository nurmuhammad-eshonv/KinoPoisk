import React from "react";
import { IoSearch } from "react-icons/io5";
import { useEffect } from "react";

function Input({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex gap-[24px] items-center mt-5 ">
      <IoSearch className="w-[32px] h-[32px] text-white" />
      <input
        type="text"
        className="h-[32px] border-none bg-transparent outline-none text-white text-xl"
        placeholder="Search movies or TV series"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Input;
