"use client";

import Link from "next/link";
import React, { MouseEventHandler, useRef, useState } from "react";
import ProductCard from "../ProductCard";

import img from "../../../public/s.png";

const MostPopular = () => {
  const sliderRef = useRef<HTMLDivElement>();
  const [pos, setPos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragging = (e: any) => {
    if (isDragging) {
      setPos((prev) =>
        Math.min(
          0,
          Math.max(
            prev + e.movementX,
            ((sliderRef.current ? sliderRef.current.scrollWidth : 0) -
              (sliderRef.current ? sliderRef.current.offsetWidth : 0)) *
              -1
          )
        )
      );
    }
    e.stopPropagation();
    e.preventDefault();
  };

  function onMouseUp(e: any) {
    setIsDragging(false);
    e.stopPropagation();
    e.preventDefault();
  }

  const onDown = (e: any) => {
    setIsDragging(true);
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="mt-4">
      <div className="flex items-center text-gray-2 dark:text-gray-14 font-semibold justify-between">
        <h2 className="">Most Popular</h2>
        <Link href="/popular" className="text-sm">
          See All
        </Link>
      </div>
      <div className="relative w-full  overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-24 z-10 bg-gradient-to-r from-white via-opac-w-2 to-transparent dark:from-body-dark dark:via-opac-b-1"></div>
        <div className="absolute top-0 right-0 h-full w-24 z-10 bg-gradient-to-l from-white via-opac-w-2 dark:from-body-dark dark:via-opac-b-1 to-transparent"></div>
        <div
          onMouseMove={dragging}
          onMouseDown={onDown}
          onMouseLeave={onMouseUp}
          onMouseUp={onMouseUp}
          style={{
            transform: `translateX(${pos}px)`,
            cursor: isDragging ? "grabbing" : ""
          }}
          ref={sliderRef as React.RefObject<HTMLDivElement>}
          className=" w-full hover:cursor-grab py-4 flex  gap-2"
        >
          <Link
            href="/"
            className="text-sm select-none font-medium text-gray-12 dark:text-gray-4 px-5 py-1.5 rounded-full border-2 border-black dark:border-white pointer-events-none bg-black dark:bg-white"
          >
            All
          </Link>
          <Link
            href="/clothes"
            className="text-sm font-medium text-gray-4 select-none pointer-events-none dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4"
          >
            Clothes
          </Link>
          <Link
            href="/shoes"
            className="text-sm font-medium text-gray-4 select-none pointer-events-none dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4"
          >
            Shoes
          </Link>
          <Link
            href="/bags"
            className="text-sm font-medium text-gray-4 select-none pointer-events-none dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4"
          >
            Bags
          </Link>
          <Link
            href="/electronics"
            className="text-sm font-medium text-gray-4 select-none pointer-events-none dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4"
          >
            Electronics
          </Link>
          <Link
            href="/watch"
            className="text-sm font-medium text-gray-4 select-none pointer-events-none dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4"
          >
            Watch
          </Link>
          <Link
            href="/jewelry"
            className="text-sm font-medium text-gray-4 select-none pointer-events-none dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4"
          >
            Jewelry
          </Link>
          <Link
            href="/kitchen"
            className="text-sm font-medium text-gray-4 select-none pointer-events-none dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4"
          >
            Kitchen
          </Link>
          <Link
            href="/toys"
            className="text-sm font-medium text-gray-4 select-none pointer-events-none dark:text-gray-12 px-5 py-1.5 rounded-full border-2 border-gray-4"
          >
            Toys
          </Link>
        </div>
      </div>
      <div className="mt-4 grid  grid-cols-fluid gap-y-4 gap-x-4">
        <ProductCard
          href="123"
          img={img}
          title="Snake Leather Bag"
          price={445}
          rating={4.5}
          sold={8411}
        />
        <ProductCard
          href="123"
          img={img}
          title="Snake Leather Bag"
          price={445}
          rating={4.5}
          sold={8411}
        />
        <ProductCard
          href="123"
          img={img}
          title="Snake Leather Bag"
          price={445}
          rating={4.5}
          sold={8411}
        />
        <ProductCard
          href="123"
          img={img}
          title="Snake Leather Bag"
          price={445}
          rating={4.5}
          sold={8411}
        />
        <ProductCard
          href="123"
          img={img}
          title="Snake Leather Bag"
          price={445}
          rating={4.5}
          sold={8411}
        />
        <ProductCard
          href="123"
          img={img}
          title="Snake Leather Bag"
          price={445}
          rating={4.5}
          sold={8411}
        />
      </div>
    </div>
  );
};

export default MostPopular;
