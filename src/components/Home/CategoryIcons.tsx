import React from "react";
import {
  GiClothes,
  GiConverseShoe,
  GiShoppingBag,
  GiCutDiamond
} from "react-icons/gi";
import { PiDesktopTowerFill } from "react-icons/pi";
import { BsWatch } from "react-icons/bs";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineSmartToy } from "react-icons/md";
import Link from "next/link";

const CategoryIcons = () => {
  return (
    <div className="flex flex-wrap gap-y-6 gap-x-9 mt-4">
      <div className=" flex flex-col items-center gap-2">
        <Link
          href="/clothes"
          className="w-14 h-14 aspect-square rounded-full bg-gray-12 flex items-center justify-center dark:bg-gray-4"
        >
          <GiClothes className="text-gray-4 dark:text-gray-12 text-2xl" />
        </Link>
        <span className="text-sm font-medium text-gray-4 dark:text-gray-12">
          Clothes
        </span>
      </div>
      <div className=" flex flex-col items-center gap-2">
        <Link
          href="/shoes"
          className="w-14 h-14 aspect-square rounded-full bg-gray-12 flex items-center justify-center dark:bg-gray-4"
        >
          <GiConverseShoe className="text-gray-4 dark:text-gray-12 text-2xl" />
        </Link>
        <span className="text-sm font-medium text-gray-4 dark:text-gray-12">
          Shoes
        </span>
      </div>
      <div className=" flex flex-col items-center gap-2">
        <Link
          href="/bags"
          className="w-14 h-14 aspect-square rounded-full bg-gray-12 flex items-center justify-center dark:bg-gray-4"
        >
          <GiShoppingBag className="text-gray-4 dark:text-gray-12 text-2xl" />
        </Link>
        <span className="text-sm font-medium text-gray-4 dark:text-gray-12">
          Bags
        </span>
      </div>
      <div className=" flex flex-col items-center gap-2">
        <Link
          href="/electronics"
          className="w-14 h-14 aspect-square rounded-full bg-gray-12 flex items-center justify-center dark:bg-gray-4"
        >
          <PiDesktopTowerFill className="text-gray-4 dark:text-gray-12 text-2xl" />
        </Link>
        <span className="text-sm font-medium text-gray-4 dark:text-gray-12">
          Electronics
        </span>
      </div>
      <div className=" flex flex-col items-center gap-2">
        <Link
          href="/watch"
          className="w-14 h-14 aspect-square rounded-full bg-gray-12 flex items-center justify-center dark:bg-gray-4"
        >
          <BsWatch className="text-gray-4 dark:text-gray-12 text-2xl" />
        </Link>
        <span className="text-sm font-medium text-gray-4 dark:text-gray-12">
          Watch
        </span>
      </div>
      <div className=" flex flex-col items-center gap-2">
        <Link
          href="/jewelry"
          className="w-14 h-14 aspect-square rounded-full bg-gray-12 flex items-center justify-center dark:bg-gray-4"
        >
          <GiCutDiamond className="text-gray-4 dark:text-gray-12 text-2xl" />
        </Link>
        <span className="text-sm font-medium text-gray-4 dark:text-gray-12">
          Jewelry
        </span>
      </div>
      <div className=" flex flex-col items-center gap-2">
        <Link
          href="/kitchen"
          className="w-14 h-14 aspect-square rounded-full bg-gray-12 flex items-center justify-center dark:bg-gray-4"
        >
          <FaKitchenSet className="text-gray-4 dark:text-gray-12 text-2xl" />
        </Link>
        <span className="text-sm font-medium text-gray-4 dark:text-gray-12">
          Kitchen
        </span>
      </div>
      <div className=" flex flex-col items-center gap-2">
        <Link
          href="/toys"
          className="w-14 h-14 aspect-square rounded-full bg-gray-12 flex items-center justify-center dark:bg-gray-4"
        >
          <MdOutlineSmartToy className="text-gray-4 dark:text-gray-12 text-2xl" />
        </Link>
        <span className="text-sm font-medium text-gray-4 dark:text-gray-12">
          Toys
        </span>
      </div>
    </div>
  );
};

export default CategoryIcons;
