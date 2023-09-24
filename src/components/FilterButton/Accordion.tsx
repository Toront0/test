import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface IAccordion {
  children: React.ReactNode;
  title: string;
}

const Accordion = ({ children, title }: IAccordion) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className=" border-b border-b-opac-b-2 cursor-pointer">
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex  px-4 py-3 select-none items-center justify-between"
      >
        <span className="text-sm text-gray-4 font-semibold">{title}</span>
        <MdKeyboardArrowDown
          className={`text-2xl transition-transform ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`grid transition-all ${
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
