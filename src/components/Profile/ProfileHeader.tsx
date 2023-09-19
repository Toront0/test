import React from "react";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const PorfileHeader = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col py-2">
      <div className="bg-gray-12 w-24 h-24 rounded-full dark:bg-gray-4 relative">
        <button className="absolute right-0 bottom-1 text-2xl">
          <BiSolidMessageSquareEdit />
        </button>
      </div>
      <div className="text-center text-gray-2 dark:tetx-gray-14">
        <h3 className=" font-semibold ">Andrew Ainsley</h3>
        <h4 className="text-xs font-medium">+1 111 467 378 399</h4>
      </div>
    </div>
  );
};

export default PorfileHeader;
