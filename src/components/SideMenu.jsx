import React from "react";
import { FaClapperboard } from "react-icons/fa6"; 
import { IoGrid } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { GiTv } from "react-icons/gi";
import { CiBookmark } from "react-icons/ci";

const SideMenu = () => {
  return (
    <div className="">
      <aside className="w-20  rounded-lg bg-gray-800 p-4 flex flex-col gap-48 items-center">
        {/* Sidebar Icons */}
        <div className="mb-8">
          <FaClapperboard className="w-[39px] h-[35px] mb-[74px] -ml-1 text-red-600" />
          <div className="flex flex-col gap-[40px]">
            <div className="w-8 h-8 rounded-md">
            <IoGrid  className="w-8 h-8 text-[#5a698f] hover:text-white cursor-pointer transition-all"/>
            </div>
            <div className="w-8 h-8 rounded-md">
            <MdLocalMovies className="w-8 h-8  hover:text-white cursor-pointer transition-all text-[#5a698f]"/>
            </div>
            <div className="w-8 h-8 rounded-md">
            <GiTv className="w-8 h-8  hover:text-white cursor-pointer transition-all text-[#5a698f]"/>
            </div>
            <div className="w-8 h-8 rounded-md">
            <CiBookmark className="w-8 h-8  hover:text-white cursor-pointer transition-all text-[#5a698f]"/>
            </div>
          </div>
        </div>
        {/* Profile Icon */}
        <div className="mt-auto">
          <div className="w-8 h-8 bg-gray-700 rounded-full">
            <img src="https://picsum.photos/32/32" className="rounded-full" alt="" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideMenu;
