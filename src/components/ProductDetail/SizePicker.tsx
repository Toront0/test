import React from "react";

interface ISizePicker {
  options: string[];
  active: string;
}

const SizePicker = ({ options, active }: ISizePicker) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      {options.map((o) => (
        <div
          key={o}
          className={`w-9 h-9 rounded-full border-2 ${
            active === o
              ? "border-black dark:border-white text-white dark:text-black bg-black dark:bg-white"
              : "border-gray-4 dark:border-gray-12 text-gray-6 dark:text-gray-10"
          }  flex items-center justify-center text-sm font-semibold`}
        >
          {o}
        </div>
      ))}
    </div>
  );
};

export default SizePicker;
