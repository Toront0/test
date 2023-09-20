import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsFilterRight } from "react-icons/bs";
import Button from "../Button";

const SearchInput = () => {
  return (
    <div className="w-full py-1 px-3 rounded-xl bg-opac-b-1 flex items-center justify-between dark:bg-opac-w-1">
      <div className="flex items-center text-gray-4 dark:text-gray-12">
        <FiSearch />
        <input
          type="text"
          autoComplete="off"
          id="search"
          name="search"
          placeholder="Search"
          className="w-full p-2 bg-transparent focus:outline-none text-sm "
        />
      </div>
      <Button>
        <BsFilterRight className="w-full h-full" />
      </Button>
    </div>
  );
};

export default SearchInput;
