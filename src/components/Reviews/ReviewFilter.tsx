import React from "react";

import { BsStarFill } from "react-icons/bs";

const ReviewFilter = () => {
  return (
    <div className="mt-4 flex gap-2">
      <button className="text-sm font-medium text-gray-12 dark:text-gray-4 px-5 py-1.5 rounded-full border-2 border-black dark:border-white bg-black dark:bg-white flex items-center gap-2">
        <BsStarFill />
        All
      </button>
      <button className="text-sm font-medium text-gray-4 dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4 flex items-center gap-2">
        <BsStarFill />5
      </button>
      <button className="text-sm font-medium text-gray-4 dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4 flex items-center gap-2">
        <BsStarFill />4
      </button>
      <button className="text-sm font-medium text-gray-4 dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4 flex items-center gap-2">
        <BsStarFill />3
      </button>
      <button className="text-sm font-medium text-gray-4 dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4 flex items-center gap-2">
        <BsStarFill />2
      </button>
      <button className="text-sm font-medium text-gray-4 dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4 flex items-center gap-2">
        <BsStarFill />1
      </button>
    </div>
  );
};

export default ReviewFilter;
