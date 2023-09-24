import React from "react";

interface IPagination {
  totalItems: number;
}

const Pagination = ({ totalItems }: IPagination) => {
  return (
    <>
      {totalItems !== 0 ? (
        <div className="flex w-full my-6 justify-center">
          {
            <div className=" flex gap-3">
              {Array.from({ length: Math.ceil(totalItems / 24) }).map(
                (d, i) => (
                  <button
                    key={i}
                    className="rounded font-semibold w-8 h-8 flex items-center justify-center border border-opac-b-1 dark:border-opac-w-1 bg-opac-b-1 dark:bg-opac-w-1 text-gray-4 dark:text-gray-12"
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          }
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
