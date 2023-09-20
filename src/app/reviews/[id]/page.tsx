import Review from "@/components/Reviews/Review";
import ReviewFilter from "@/components/Reviews/ReviewFilter";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

import img from "/public/s.png";

const page = () => {
  return (
    <div className="px-4 w-full h-[calc(100%-56px)] py-4 overflow-x-hidden dark:bg-black">
      <div className="flex px-2 items-center justify-between">
        <Link
          href="/"
          className="text-gray-4 group font-semibold dark:text-gray-12 flex items-center gap-1"
        >
          <HiOutlineArrowSmLeft className="text-2xl group-hover:-translate-x-1 transition-transform" />
          <h3>4.8 (4, 974 reviews)</h3>
        </Link>
        <button className="text-xl text-gray-7">
          <RiSearchLine className="w-full h-full" />
        </button>
      </div>
      <ReviewFilter />
      <section className="mt-4 flex flex-col">
        <Review
          id={1}
          created_at={new Date()}
          reviewer_img={img}
          reviewer_name="Saboslaji"
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita amet praesentium atque sint corrupti? Quas exercitationem nesciunt molestias consequuntur?"
          rating={5}
        />
        <Review
          id={1}
          created_at={new Date()}
          reviewer_img={img}
          reviewer_name="Saboslaji"
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita amet praesentium atque sint corrupti? Quas exercitationem nesciunt molestias consequuntur?"
          rating={5}
        />
        <Review
          id={1}
          created_at={new Date()}
          reviewer_img={img}
          reviewer_name="Saboslaji"
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita amet praesentium atque sint corrupti? Quas exercitationem nesciunt molestias consequuntur?"
          rating={5}
        />
        <Review
          id={1}
          created_at={new Date()}
          reviewer_img={img}
          reviewer_name="Saboslaji"
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita amet praesentium atque sint corrupti? Quas exercitationem nesciunt molestias consequuntur?"
          rating={5}
        />
        <Review
          id={1}
          created_at={new Date()}
          reviewer_img={img}
          reviewer_name="Saboslaji"
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita amet praesentium atque sint corrupti? Quas exercitationem nesciunt molestias consequuntur?"
          rating={5}
        />
        <Review
          id={1}
          created_at={new Date()}
          reviewer_img={img}
          reviewer_name="Saboslaji"
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita amet praesentium atque sint corrupti? Quas exercitationem nesciunt molestias consequuntur?"
          rating={5}
        />
      </section>
    </div>
  );
};

export default page;
