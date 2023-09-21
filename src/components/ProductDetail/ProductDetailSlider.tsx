"use client";

import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";

import { MdKeyboardArrowLeft } from "react-icons/md";

interface IProductDetailSlider {
  imgs: StaticImageData[];
  alt: string[];
}

const ProductDetailSlider = ({ imgs, alt }: IProductDetailSlider) => {
  const [pos, setPos] = useState(0);
  const windowRef = useRef<HTMLDivElement>();

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      console.log("swipe", isLeftSwipe ? "left" : "right");
      isLeftSwipe ? moveRight() : moveLeft();
    }
    // add your conditional logic here
  };

  const moveRight = () => {
    if (windowRef.current) {
      setPos((prev) =>
        Math.min(
          prev + (windowRef.current ? windowRef.current?.offsetWidth : 0),
          (windowRef.current ? windowRef.current?.scrollWidth : 0) -
            (windowRef.current ? windowRef.current?.offsetWidth : 0)
        )
      );
    }
  };

  const moveLeft = () => {
    if (windowRef.current) {
      setPos((prev) =>
        Math.max(
          0,
          prev - (windowRef.current ? windowRef.current?.offsetWidth : 0)
        )
      );
    }
  };

  console.log(touchStart);
  console.log(touchEnd);

  return (
    <div className="w-full bg-white lg:w-1/2 lg:h-full h-fit  md:h-1/2">
      <div className="w-full    h-full relative  flex items-center justify-center bg-[#fafafa] dark:bg-body-dark">
        <button
          onClick={moveLeft}
          className="absolute w-10 z-10 active:scale-95 h-10 top-1/2 -translate-y-1/2 left-4 rounded-full bg-opac-b-2 dark:bg-opac-w-2 border border-opac-b-1 dark:border-opac-w-1 text-gray-6 dark:text-gray-12 flex items-center justify-center text-2xl"
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={moveRight}
          className="absolute w-10 z-10 active:scale-95 h-10 top-1/2 -translate-y-1/2 right-4 rounded-full bg-opac-b-2 dark:bg-opac-w-2 border border-opac-b-1 dark:border-opac-w-1 text-gray-6 dark:text-gray-12 flex items-center justify-center text-2xl"
        >
          <MdKeyboardArrowLeft className="rotate-180" />
        </button>
        <div className="w-full h-full relative overflow-hidden   ">
          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
            ref={windowRef as React.RefObject<HTMLDivElement>}
            style={{ transform: `translateX(-${pos}px)` }}
            className="w-full h-full relative transition-transform flex"
          >
            {imgs.map((s, i) => (
              <div
                key={i}
                className="min-w-full h-full relative flx items-center justify-center"
              >
                <Image
                  src={s}
                  alt={alt[0]}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full  justify-center absolute left-1/2 gap-2  -translate-x-1/2 bottom-2">
          {imgs.map((d, i) => (
            <div
              key={i}
              className={`w-2 h-2  rounded-full ${
                pos ===
                i * (windowRef.current ? windowRef.current?.offsetWidth : i)
                  ? "dark:bg-gray-12 bg-gray-4"
                  : "dark:bg-opac-w-6 bg-opac-b-5"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSlider;
