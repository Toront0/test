"use client";

import { useCartState, useToaster } from "@/store/store";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { BsStarHalf, BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

interface IProductCard {
  img: string;
  title: string;
  href: string;
  price: number;
}

const ProductCard = ({ img, title, price, href }: IProductCard) => {
  const cartState = useCartState();
  const addToast = useToaster((state) => state.addToast);

  return (
    <div className=" w-full relative">
      <div className="absolute z-10 top-2 right-2">
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-opac-b-1 dark:hover:bg-opac-w-1 text-gray-4 dark:text-gray-12">
          <div className="w-5 h-5">
            <AiOutlineHeart className="w-full h-full" />
          </div>
        </button>
        <button
          onClick={() => {
            cartState.addItemToCart({
              id:
                cartState.items.length > 0
                  ? cartState.items[cartState.items.length - 1].id + 1
                  : 1,
              added_at: new Date(),
              img,
              title,
              price,
              amount: 1,
              color: "#f00",
              size: "M"
            });
            addToast({
              id:
                cartState.items.length > 0
                  ? cartState.items[cartState.items.length - 1].id + 1
                  : 1,
              title,
              img,
              price
            });
          }}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-opac-b-1 dark:hover:bg-opac-w-1 text-gray-4 dark:text-gray-12"
        >
          <div className="w-5 h-5">
            <BsCart className="w-full h-full" />
          </div>
        </button>
      </div>
      <Link href={href}>
        <div className="w-full rounded-xl overflow-hidden flex items-center justify-center aspect-square bg-gray-12 dark:bg-gray-4 relative">
          <Image
            src={img}
            alt="123"
            className="hover:scale-105 transition-transform"
            width={500}
            height={500}
          />
          <span className="font-bold absolute bottom-2 text-xs px-3 py-1 rounded bg-opac-b-12 text-white left-2">
            ${price.toFixed(2)}
          </span>
        </div>
      </Link>
      <div className="text-gray-1 flex justify-between dark:text-gray-15 mt-1">
        <div>
          <Link
            href={href}
            className="font-bold text-sm leading-none hover:underline"
          >
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
