import ProductDetailSlider from "@/components/ProductDetail/ProductDetailSlider";
import React from "react";

import img from "/public/s.png";
import img2 from "/public/s-2.png";
import AboutBlock from "@/components/ProductDetail/AboutBlock";
import { Product } from "@/app/page";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/products/shoes/${slug}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();

  return data;
};

const page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Product;

  console.log("data123", data);

  return (
    <div className="w-full h-[calc(100%-48px)] max-w-[2000px] mx-auto">
      <div className="w-full h-full flex flex-col lg:flex-row">
        <ProductDetailSlider imgs={data.imgs} alt={["123"]} />
        <AboutBlock
          title={data.title}
          descriptipn={data.description}
          size={data.size}
          color={data.color}
          price={data.price}
        />
      </div>
    </div>
  );
};

export default page;
