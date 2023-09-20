import Image, { StaticImageData } from "next/image";
import React from "react";

import { PiTrashSimple } from "react-icons/pi";
import Quantity from "../ProductDetail/Quantity";

interface ICartProduct {
  id: number;
  added_at: Date;
  img: StaticImageData;
  title: string;
  price: number;
  amount: number;
  color?: string;
  size?: string;
}

const CartProduct = ({
  id,
  added_at,
  img,
  title,
  price,
  amount,
  color,
  size
}: ICartProduct) => {
  return (
    <div className="w-full rounded-lg shadow-sm flex items-center gap-4 bg-white dark:bg-black p-3">
      <div className="h-28 bg-[#fafafa] dark:bg-gray-2 aspect-square rounded-lg">
        <Image src={img} alt={title} />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-gray-2 dark:text-gray-14 font-semibold">
            {title}
          </h3>
          <button className="text-xl text-gray-6 dark:text-gray-10">
            <PiTrashSimple />
          </button>
        </div>
        <div className="mt-1 flex gap-4 ">
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: color }}
              className="w-4 h-4 rounded-full"
            ></div>
            <span className="text-xs text-gray-4 dark:text-gray-12">Color</span>
          </div>
          <div className="before:content-['|']"></div>
          <div className="text-xs text-gray-4 dark:text-gray-12 flex items-center gap-1">
            <span>Size</span>
            <span>=</span>

            <span> {size}</span>
          </div>
        </div>
        <div className="flex mt-1 items-center justify-between">
          <span className="text-base font-bold text-gray-4 dark:text-gray-12">
            ${price.toFixed(2)}
          </span>
          <Quantity hasTitle={false} size="sm" />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
