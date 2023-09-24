"use client";

import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import Reviews from "./Reviews";

import img from "/public/s.png";
import { PiHeartLight } from "react-icons/pi";
import { BsStarHalf } from "react-icons/bs";
import Link from "next/link";
import Quantity from "./Quantity";
import ColorPicker from "./ColorPicker";
import SizePicker from "./SizePicker";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

interface IAboutBlock {
  title: string;
  descriptipn: string;
  size?: string[];
  color?: string[];
  price: number;
}

const reviews = [
  {
    id: 1,
    created_at: new Date(),
    reviewer_img: img,
    reviewer_name: "Saboslaji",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita amet praesentium atque sint corrupti? Quas exercitationem nesciunt molestias consequuntur?",
    rating: 5
  },
  {
    id: 2,
    created_at: new Date(),
    reviewer_img: img,
    reviewer_name: "Saboslaji",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita amet praesentium atque sint corrupti? Quas exercitationem nesciunt molestias consequuntur?",
    rating: 5
  },
  {
    id: 3,
    created_at: new Date(),
    reviewer_img: img,
    reviewer_name: "Saboslaji",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita amet praesentium atque sint corrupti? Quas exercitationem nesciunt molestias consequuntur?",
    rating: 5
  },
  {
    id: 4,
    created_at: new Date(),
    reviewer_img: img,
    reviewer_name: "Saboslaji",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita amet praesentium atque sint corrupti? Quas exercitationem nesciunt molestias consequuntur?",
    rating: 5
  },
  {
    id: 5,
    created_at: new Date(),
    reviewer_img: img,
    reviewer_name: "Saboslaji",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita amet praesentium atque sint corrupti? Quas exercitationem nesciunt molestias consequuntur?",
    rating: 5
  }
];

const AboutBlock = ({
  title,
  descriptipn,
  size,
  color,
  price
}: IAboutBlock) => {
  const [isReviewExpanded, setIsReviewExpanded] = useState(false);

  return (
    <div className="h-[calc(100%-48px)] w-full flex flex-col justify-between lg:w-1/2  ">
      <div className="p-4 bg-[#fafafa] w-full  lg:overflow-y-auto dark:bg-body-dark h-fit ">
        <Link
          href="/shoes"
          className="text-sm text-gray-4  group dark:text-gray-12 flex items-center gap-2"
        >
          <LiaLongArrowAltLeftSolid className="text-2xl group-hover:-translate-x-1 transition-transform will-change-transform" />
          Назад
        </Link>
        <div className="pb-4 mt-4">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-2 dark:text-gray-12">
              {title}
            </h1>
            <button className="text-2xl">
              <PiHeartLight className="w-full h-full" />
            </button>
          </div>
          <div className="flex gap-4 mt-2">
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
          <div className="mt-6 flex gap-6">
            <button
              onClick={() => setIsReviewExpanded(false)}
              className="text-gray-4 dark:text-gray-12 font-semibold"
            >
              Description
            </button>
            <button
              onClick={() => setIsReviewExpanded(true)}
              className="text-gray-7 dark:text-gray-9 font-semibold"
            >
              Reviews
            </button>
          </div>
          {isReviewExpanded ? (
            <div>
              <Reviews reviews={reviews} />
            </div>
          ) : (
            <div>
              <div className="mt-2">
                <p className="text-sm text-gray-4 dark:text-gray-12 mt-2">
                  {descriptipn}
                </p>
              </div>
              <div className="mt-2 flex">
                {size ? (
                  <div className="mr-12">
                    <h3 className="text-gray-4 dark:text-gray-12 font-semibold">
                      Size
                    </h3>
                    <SizePicker options={size} active="M" />
                  </div>
                ) : null}
              </div>
              {color ? (
                <div>
                  <h3 className="text-gray-4 dark:text-gray-12 font-semibold">
                    Color
                  </h3>
                  <ColorPicker options={color} active="#666" />
                </div>
              ) : null}
              <div className="mt-6">
                <Quantity hasTitle size="base" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" flex justify-between bg-white dark:bg-black p-4 items-center border-t pb-4 border-opac-b-2 dark:border-opac-w-2">
        <div className="flex flex-col">
          <h4 className="text-xs text-gray-6 dark:text-gray-9">Total Price</h4>
          <h3 className="text-xl text-gray-2 font-bold dark:text-gray-14">
            ${price.toFixed(2)}
          </h3>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium bg-gray-1 dark:bg-gray-15 text-white dark:text-black px-6 py-2.5 rounded-full">
          <BiShoppingBag className="text-lg" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AboutBlock;
