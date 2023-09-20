import React from "react";

import { BsCheck } from "react-icons/bs";

interface IColorPicker {
  options: string[];
  active: string;
}

const ColorPicker = ({ options, active }: IColorPicker) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      {options.map((o) => (
        <div
          key={o}
          style={{ backgroundColor: o }}
          className={`w-9 h-9 rounded-full border text-white border-opac-b-1 dark:border-opac-w-1  flex items-center justify-center text-2xl font-semibold`}
        >
          {active === o ? <BsCheck /> : null}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
