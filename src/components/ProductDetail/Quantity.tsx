import React from "react";

interface IQuantity {
  hasTitle: boolean;
  size: "sm" | "base";
}

const Quantity = ({ hasTitle = true, size = "sm" }: IQuantity) => {
  return (
    <div className="flex items-center gap-2 rounded-full">
      {hasTitle && (
        <h3 className="text-gray-4 dark:text-gray-12 font-semibold">
          Quantity
        </h3>
      )}
      <div
        className={`flex items-center gap-2 rounded-full font-bold text-gray-4 dark:text-gray-12 justify-between ${
          size === "base" ? "w-32 text-xl h-10" : "w-28 text-lg h-9"
        } bg-opac-b-1 dark:bg-opac-w-1 `}
      >
        <button className="hover:bg-opac-b-1 dark:hover:bg-opac-w-1 rounded-l-full w-1/3 h-full">
          -
        </button>
        <span
          className={`${
            size === "base" ? "text-lg" : "text-base"
          } w-1/6 flex justify-center`}
        >
          1
        </span>
        <button className="hover:bg-opac-b-1 dark:hover:bg-opac-w-1 rounded-r-full w-1/3 h-full">
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
