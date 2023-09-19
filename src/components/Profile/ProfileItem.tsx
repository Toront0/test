import Link from "next/link";
import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";

interface IProfileItem {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const ProfileItem = ({ icon, title, href }: IProfileItem) => {
  return (
    <Link
      href={href}
      className="text-xl hover:bg-opac-b-1 dark:hover:bg-opac-w-1 rounded p-2 text-gray-4 dark:text-gray-12 flex items-center justify-between gap-1 font-semibold"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm">{title}</span>
      </div>
      <MdKeyboardArrowRight />
    </Link>
  );
};

export default ProfileItem;
