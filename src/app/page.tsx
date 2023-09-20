"use client";

import CustomScrollbar from "@/components/CustomScrollbar";
import Header from "@/components/Header/Header";
import CategoryIcons from "@/components/Home/CategoryIcons";
import MostPopular from "@/components/Home/MostPopular";
import SearchInput from "@/components/Home/SearchInput";
import { useRef } from "react";

export default function Home() {
  const elRef = useRef<HTMLDivElement>();

  return (
    <div className="w-full h-[calc(100%-56px)] bg-white dark:bg-body-dark px-4 overflow-x-hidden">
      <SearchInput />
      <CategoryIcons />
      <MostPopular />
    </div>
  );
}
