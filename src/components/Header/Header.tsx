"use client";

import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiHeartLight, PiHandbagLight } from "react-icons/pi";
import { BiLogInCircle } from "react-icons/bi";
import Link from "next/link";

const Header = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex bg-[#fafafa] h-12 dark:bg-body-dark items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 text-sm font-medium text-gray-4 dark:text-gray-12">
          <BiLogInCircle className="text-2xl" />
          <span>Войти</span>
        </button>

        {/* <>
          <div className="w-10 h-10 rounded-full bg-gray-12 dark:bg-gray-4"></div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-7">Good morning</span>
            <h2 className="text-sm font-medium text-gray-4 dark:text-gray-12">
              Andrew Ainsley
            </h2>
          </div>
        </> */}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center mr-2">
          <input
            id="toggle"
            className="toggle"
            type="checkbox"
            onChange={toggleTheme}
          />
        </div>
        <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-4 dark:text-gray-12 hover:bg-opac-b-1 dark:hover:bg-opac-w-1">
          <div className="w-6 h-6">
            <IoIosNotificationsOutline className="w-full h-full" />
          </div>
        </button>
        <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-4 dark:text-gray-12 hover:bg-opac-b-1 dark:hover:bg-opac-w-1">
          <div className="w-6 h-6">
            <PiHeartLight className="w-full h-full" />
          </div>
        </button>
        <Link
          href="/cart"
          className="w-8 h-8 rounded-full flex items-center justify-center text-gray-4 dark:text-gray-12 hover:bg-opac-b-1 dark:hover:bg-opac-w-1"
        >
          <div className="w-6 h-6">
            <PiHandbagLight className="w-full h-full" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
