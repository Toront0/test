"use client";

import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import FilterButton from "../FilterButton/FilterButton";
import { Product } from "@/app/page";
import Image from "next/image";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

import Link from "next/link";
import Loader from "../Loader";

const SearchInput = () => {
  const [founded, setFounded] = useState<Product[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [debounced] = useDebouncedValue(inputValue, 300);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputValue.length > 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    if (debounced.length > 0) {
      const handler = async () => {
        const res = await fetch(
          `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/search?starts_with=${debounced}`
        );

        const data = await res.json();

        setFounded(data);

        setLoading(false);
      };

      handler();
    }
  }, [inputValue, debounced]);

  return (
    <div className="flex gap-2 mt-6 items-center w-full justify-between">
      <div>{debounced}</div>
      <FilterButton />
      <div className="w-1/3 h-10 p-1 flex flex-col rounded items-center bg-gray-14   relative">
        <input
          type="text"
          onFocus={() => setIsDropdownOpen(true)}
          // onBlur={() => setIsDropdownOpen(false)}
          className="w-full h-full bg-transparent px-3  relative z-30 focus:outline-none text-sm text-gray-2"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {debounced.length > 0 ? (
          <>
            {founded.length > 0 ? (
              <div className="absolute top-0 w-full  bg-gray-15 h-fit shadow-xl rounded border border-opac-b-2 z-20">
                <div className="w-full h-96  px-2 overflow-y-auto mt-10">
                  {founded.map((f) => (
                    <Link
                      key={f.id}
                      href={`/${f.category}/${f.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex hover:bg-opac-b-1 p-1 items-center gap-2 mb-3"
                    >
                      <div className="w-16 h-16 rounded relative">
                        <Image
                          src={f.imgs[0]}
                          alt={f.title}
                          fill
                          className="rounded"
                        />
                      </div>
                      <div>
                        <h5 className="text-xs text-gray-4 font-semibold">
                          {f.title}
                        </h5>
                        <h6 className="text-xs text-gray-6 font-semibold">
                          ${f.price.toFixed(2)}
                        </h6>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {loading ? (
                  <div className=" absolute shadow-xl top-0 z-20 w-full h-24 bg-gray-14 text-gray-4 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <span className="leading-none text-base font-medium">
                        Loading
                      </span>{" "}
                      <Loader />
                    </div>
                  </div>
                ) : (
                  <div className="absolute shadow-xl top-0 z-20 w-full h-24 bg-gray-14 tetx-gray-4 flex items-center justify-center">
                    <div>No results</div>
                  </div>
                )}
              </>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default SearchInput;
