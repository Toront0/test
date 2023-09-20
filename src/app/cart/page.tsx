import CartProduct from "@/components/Cart/CartProduct";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

import img from "../../../public/s.png";
import { HiArrowSmRight } from "react-icons/hi";

const page = () => {
  return (
    <div className="pt-2 w-full flex flex-col h-[calc(100%-56px)] overflow-hidden bg-[#fafafa] dark:bg-body-dark">
      <div className="px-4 h-full overflow-y-auto">
        <div className="flex px-2 items-center justify-between">
          <Link
            href="/"
            className="text-gray-4 group font-semibold dark:text-gray-12 flex items-center gap-1"
          >
            <HiOutlineArrowSmLeft className="text-2xl group-hover:-translate-x-1 transition-transform" />
            <h3>My Cart</h3>
          </Link>
          <button className="text-xl text-gray-7">
            <RiSearchLine className="w-full h-full" />
          </button>
        </div>
        <main className="mt-4 flex flex-col gap-4">
          <CartProduct
            id={1}
            added_at={new Date()}
            title="Werolla Cardigans"
            size="M"
            color="#f00"
            price={385}
            img={img}
            amount={1}
          />
          <CartProduct
            id={1}
            added_at={new Date()}
            title="Werolla Cardigans"
            size="M"
            color="#f00"
            price={385}
            img={img}
            amount={1}
          />
          <CartProduct
            id={1}
            added_at={new Date()}
            title="Werolla Cardigans"
            size="M"
            color="#f00"
            price={385}
            img={img}
            amount={1}
          />
          <CartProduct
            id={1}
            added_at={new Date()}
            title="Werolla Cardigans"
            size="M"
            color="#f00"
            price={385}
            img={img}
            amount={1}
          />
          <CartProduct
            id={1}
            added_at={new Date()}
            title="Werolla Cardigans"
            size="M"
            color="#f00"
            price={385}
            img={img}
            amount={1}
          />
          <CartProduct
            id={1}
            added_at={new Date()}
            title="Werolla Cardigans"
            size="M"
            color="#f00"
            price={385}
            img={img}
            amount={1}
          />
        </main>
      </div>

      <div className=" flex justify-between p-4 items-center border-t pb-4 border-opac-b-2 dark:border-opac-w-2">
        <div className="flex flex-col">
          <h4 className="text-xs text-gray-6 dark:text-gray-9">Total Price</h4>
          <h3 className="text-xl text-gray-2 font-bold dark:text-gray-14">
            $475.00
          </h3>
        </div>
        <button className="flex group items-center gap-2 text-sm font-medium bg-gray-1 dark:bg-gray-15 text-white dark:text-black px-6 py-2.5 rounded-full">
          Checkout
          <HiArrowSmRight className="text-lg group-hover:translate-x-1 transition-transform will-change-transform" />
        </button>
      </div>
    </div>
  );
};

export default page;
