"use client";

import { useToaster } from "@/store/store";
import Image from "next/image";
import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";

const Toaster = () => {
  const toasts = useToaster((state) => state.toasts);

  return (
    <div className="absolute top-0 rounded right-2 w-72 flex flex-col gap-1 h-fit pointer-events-none ">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="w-full bg-gray-15 dark:bg-body-dark rounded border border-opac-b-2 dark:border-opac-w-2 p-1.5 flex items-center gap-2"
        >
          <div className="min-w-[40px] w-10 h-10 relative flex items-center justify-center bg-gray-12 rounded dark:bg-gray-4">
            <Image src={t.img} alt={t.title} />
          </div>
          <div className="flex flex-col w-full text-gray-4 dark:text-gray-12">
            <h4 className="font-semibold text-[13px]">{t.title}</h4>

            <p className="text-xs text-gray-7 dark:text-gray-9">
              Товар добавлен в корзину
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toaster;
