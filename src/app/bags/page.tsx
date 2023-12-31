import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

import { Product } from "../page";
import { db } from "../lib/db";

const protocol = typeof window === "undefined" ? "http://" : "https://";

const getData = async () => {
  console.log(
    `${protocol}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/bags`
  );

  const res = await fetch(
    `${protocol}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/bags`,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  const data = await res.json();

  return data;
};

const page = async () => {
  const data = await db.product.findMany({
    where: {
      category: "bags"
    }
  });

  return (
    <div>
      <div className="px-4 mt-4">
        <div className="flex px-2 items-center justify-between">
          <Link
            href="/"
            className="text-gray-4 group font-semibold dark:text-gray-12 flex items-center gap-1"
          >
            <HiOutlineArrowSmLeft className="text-2xl group-hover:-translate-x-1 transition-transform" />
            <h3>Bags</h3>
          </Link>
          <button className="text-xl text-gray-7">
            <RiSearchLine className="w-full h-full" />
          </button>
        </div>
        <div className="grid grid-cols-fluid gap-4 mt-4">
          {data.map((p) => (
            <ProductCard
              key={p.id}
              href={String(p.id)}
              img={p.imgs[0]}
              title={p.title}
              price={p.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
