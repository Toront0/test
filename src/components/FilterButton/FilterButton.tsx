"use client";

import React, { useState } from "react";
import FilterModal from "./FilterModal";

const FilterButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-w-fit relative">
      <button
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="px-3 rounded border border-gray-4 py-1 text-sm font-medium text-gray-4"
      >
        Filter & Sort
      </button>
      {isModalOpen && <FilterModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default FilterButton;
