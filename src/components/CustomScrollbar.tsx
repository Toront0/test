"use client";

import { useRef, useState } from "react";

interface ICustomScrollbar {
  el?: HTMLDivElement;
}

const CustomScrollbar = ({ el }: ICustomScrollbar) => {
  const contentRef = useRef<HTMLDivElement>();
  const [curPos, setCurPos] = useState(0);

  const getScrollHeight = () => {
    if (contentRef.current) {
      return (
        Math.floor(
          (contentRef.current.offsetHeight / contentRef.current.scrollHeight) *
            100
        ) + "%"
      );
    }
  };

  const getScrollTop = () => {
    if (contentRef.current) {
      return Math.floor((curPos / contentRef.current.scrollHeight) * 100) + "%";
    }
  };

  return (
    <div className="h-full min-w-[12px] relative">
      <div className="absolute right-4 h-full w-full flex justify-center  z-10">
        <div className="relative w-full  h-full flex justify-center">
          <div
            style={{
              top: getScrollTop(),
              height: getScrollHeight()
            }}
            className="w-2  bg-gray-4 rounded absolute top-[calc(100%-48px)]"
          ></div>
        </div>
      </div>
      <div
        // ref={contentRef as React.RefObject<HTMLDivElement>}
        className="w-full  h-full overflow-y-auto"
        onScroll={(e) => setCurPos(e.currentTarget.scrollTop)}
      >
        <div className="h-full w-full bg-gray-4"></div>
        <div className="h-full w-full bg-gray-8"></div>
        <div className="h-full w-full bg-gray-4"></div>
        <div className="h-full w-full bg-gray-8"></div>
        <div className="h-full w-full bg-gray-4"></div>
      </div>
    </div>
  );
};

export default CustomScrollbar;
