import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

import Pagination from "@/components/Pagination";
import { Product } from "../page";
import { db } from "../lib/db";

const getData = async () => {
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);

  const res = await fetch(`/api/products/shoes`, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();

  return data;
};

const page = async () => {
  const data = await db.product.findMany({
    where: {
      category: "shoes"
    }
  });

  return (
    <div className="relative h-[calc(100%-48px)] overflow-y-auto">
      {/* <Toaster /> */}
      <div className="p-4 mt-4">
        <div className="flex px-2 items-center justify-between">
          <Link
            href="/"
            className="text-gray-4 group font-semibold dark:text-gray-12 flex items-center gap-1"
          >
            <HiOutlineArrowSmLeft className="text-2xl group-hover:-translate-x-1 transition-transform" />
            <h3>Shoes</h3>
          </Link>
          <button className="text-xl text-gray-7">
            <RiSearchLine className="w-full h-full" />
          </button>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-fluid gap-y-8 gap-x-4 mt-4 max-w-[2000px] mx-auto">
          {data.map((p) => (
            <ProductCard
              key={p.id}
              href={`/shoes/${p.id}`}
              img={p.imgs[0]}
              title={p.title}
              price={p.price}
            />
          ))}
        </div>
        <Pagination totalItems={49} />
      </div>
    </div>
  );
};

export default page;
