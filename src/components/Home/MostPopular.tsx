import Link from "next/link";
import React, { MouseEventHandler, useRef, useState } from "react";
import ProductCard from "../ProductCard";
import { Product } from "@/app/page";
import { useProducts } from "@/store/store";

interface IMostPopular {
  products?: Product[];
}

const MostPopular = () => {
  return (
    <div className="mt-4 grid  grid-cols-fluid gap-y-4 gap-x-4">
      {useProducts.getState().products?.map((p) => (
        <ProductCard
          key={p.id}
          href={p.title}
          img={p.imgs[0]}
          title={p.title}
          price={p.price}
        />
      ))}
    </div>
  );
};

export default MostPopular;
