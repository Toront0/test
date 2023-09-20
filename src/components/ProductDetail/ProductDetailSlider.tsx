"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface IProductDetailSlider {
  imgs: StaticImageData[];
  alt: string[];
}

const ProductDetailSlider = ({ imgs, alt }: IProductDetailSlider) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="w-full bg-white lg:w-1/2 lg:h-full h-fit  md:h-1/2">
      <div className="w-full    h-full relative  flex items-center justify-center bg-[#fafafa] dark:bg-body-dark">
        <div className="w-full h-full relative flex items-center justify-center">
          <Image
            src={imgs[activeSlide]}
            alt={alt[0]}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex w-full justify-center absolute left-1/2 gap-2 -translate-x-1/2 bottom-2">
          <div className="w-2 h-2 rounded-full bg-opac-w-6"></div>
          <div className="w-2 h-2 rounded-full bg-opac-w-6"></div>
          <div className="w-2 h-2 rounded-full bg-opac-w-6"></div>
          <div className="w-2 h-2 rounded-full bg-opac-w-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSlider;
