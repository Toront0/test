import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

import img from "/public/s.png";

const page = () => {
  return (
    <div>
      <div className="px-4 mt-4">
        <div className="flex px-2 items-center justify-between">
          <Link
            href="/"
            className="text-gray-4 group font-semibold dark:text-gray-12 flex items-center gap-1"
          >
            <HiOutlineArrowSmLeft className="text-2xl group-hover:-translate-x-1 transition-transform" />
            <h3>Clothes</h3>
          </Link>
          <button className="text-xl text-gray-7">
            <RiSearchLine className="w-full h-full" />
          </button>
        </div>
        <div className="grid grid-cols-fluid gap-4 mt-4">
          <ProductCard
            href="clothes/123"
            img={img}
            title="Snake Leather Bag"
            price={445}
            rating={4.5}
            sold={8411}
          />
          <ProductCard
            href="clothes/123"
            img={img}
            title="Snake Leather Bag"
            price={445}
            rating={4.5}
            sold={8411}
          />
          <ProductCard
            href="clothes/123"
            img={img}
            title="Snake Leather Bag"
            price={445}
            rating={4.5}
            sold={8411}
          />
          <ProductCard
            href="clothes/123"
            img={img}
            title="Snake Leather Bag"
            price={445}
            rating={4.5}
            sold={8411}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
