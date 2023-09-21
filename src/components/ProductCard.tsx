import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { BsStarHalf } from "react-icons/bs";

interface IProductCard {
  img: StaticImageData;
  title: string;
  rating: number;
  price: number;
  sold: number;
  href: string;
}

const ProductCard = ({
  img,
  title,
  rating,
  price,
  sold,
  href
}: IProductCard) => {
  return (
    <div className=" w-full ">
      <Link href={href}>
        <div className="w-full rounded-xl overflow-hidden aspect-square bg-gray-12 dark:bg-gray-4">
          <Image
            src={img}
            alt="123"
            className="hover:scale-105 transition-transform"
          />
        </div>
      </Link>
      <div className="text-gray-4 dark:text-gray-12 mt-2">
        <Link href={href} className="font-bold hover:underline">
          {title}
        </Link>
        <div className="flex items-center gap-4 relative">
          <div className="text-sm text-gray-6 dark:text-gray-10 flex items-center gap-2">
            <BsStarHalf className="text-lg" />
            <span>{rating}</span>
          </div>
          <div className="h-fit">
            <div className="before:content-[''] before:w-px before:h-1/2 before:bg-black">
              |
            </div>
          </div>
          <div className="bg-gray-11 dark:bg-gray-4 px-2 py-1 rounded-xl text-xs font-semibold text-gray-6 dark:text-gray-10">
            {sold} sold
          </div>
        </div>
        <span className="font-bold">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
