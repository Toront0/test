import ColorPicker from "@/components/ProductDetail/ColorPicker";
import ProductDetailSlider from "@/components/ProductDetail/ProductDetailSlider";
import Quantity from "@/components/ProductDetail/Quantity";
import SizePicker from "@/components/ProductDetail/SizePicker";
import Link from "next/link";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BsStarHalf } from "react-icons/bs";
import { PiHeartLight } from "react-icons/pi";

import img from "/public/s.png";

const page = () => {
  return (
    <div className="w-full h-[calc(100%-56px)] max-w-[2000px] mx-auto">
      <div className="w-full h-full flex flex-col lg:flex-row">
        {/* <ProductDetailSlider imgs={[img as string]} alt={["123"]} /> */}
        <div className="h-full w-full flex flex-col justify-between lg:w-1/2  ">
          <div className="p-4 bg-[#fafafa] w-full  overflow-y-auto dark:bg-body-dark h-fit ">
            <div className="pb-4">
              <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-2 dark:text-gray-12">
                  Venesa Long Shirt
                </h1>
                <button className="text-2xl">
                  <PiHeartLight className="w-full h-full" />
                </button>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="px-3 font-medium py-1 rounded-lg text-xs text-gray-6 dark:text-gray-9 bg-opac-b-1 dark:bg-opac-w-1">
                  9,742 sold
                </div>
                <div className="text-sm text-gray-6 dark:text-gray-10 font-medium flex items-center gap-2">
                  <BsStarHalf className="text-lg" />
                  <span>4.7</span>
                  <Link href="/reviews" className="hover:underline">
                    (4.749 reviews)
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t pb-4 border-opac-b-2 dark:border-opac-w-2">
              <div className="mt-2">
                <h2 className="text-gray-4 dark:text-gray-12 font-semibold">
                  Description
                </h2>
                <p className="text-sm text-gray-4 dark:text-gray-12 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  in laboriosam incidunt, maxime beatae optio, ex error libero,
                  praesentium esse voluptas omnis exercitationem provident id
                  doloremque! Sunt dolore molestias aliquid!
                </p>
              </div>
              <div className="mt-2 flex">
                <div className="mr-12">
                  <h3 className="text-gray-4 dark:text-gray-12 font-semibold">
                    Size
                  </h3>
                  <SizePicker options={["S", "M", "L"]} active="M" />
                </div>
                <div>
                  <h3 className="text-gray-4 dark:text-gray-12 font-semibold">
                    Color
                  </h3>
                  <ColorPicker
                    options={["#f00", "#111", "#666"]}
                    active="#666"
                  />
                </div>
              </div>
              <div className="mt-6">
                <Quantity hasTitle size="base" />
              </div>
            </div>
          </div>
          <div className=" flex justify-between bg-white dark:bg-black p-4 items-center border-t pb-4 border-opac-b-2 dark:border-opac-w-2">
            <div className="flex flex-col">
              <h4 className="text-xs text-gray-6 dark:text-gray-9">
                Total Price
              </h4>
              <h3 className="text-xl text-gray-2 font-bold dark:text-gray-14">
                $475.00
              </h3>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium bg-gray-1 dark:bg-gray-15 text-white dark:text-black px-6 py-2.5 rounded-full">
              <BiShoppingBag className="text-lg" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
