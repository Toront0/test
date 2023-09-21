import ProductDetailSlider from "@/components/ProductDetail/ProductDetailSlider";
import React from "react";

import img from "/public/s.png";
import img2 from "/public/s-2.png";
import AboutBlock from "@/components/ProductDetail/AboutBlock";

const page = () => {
  return (
    <div className="w-full h-[calc(100%-56px)] max-w-[2000px] mx-auto">
      <div className="w-full h-full flex flex-col lg:flex-row">
        <ProductDetailSlider imgs={[img, img2, img, img2]} alt={["123"]} />
        <AboutBlock />
      </div>
    </div>
  );
};

export default page;
