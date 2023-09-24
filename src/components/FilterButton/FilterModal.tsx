"use client";

import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";
import { FiDivide } from "react-icons/fi";

interface IFilterData {
  category: string;
  brand: string;
  color: string[];
  size: string[];
  price: number;
}

const FilterModal = ({ onClose }: { onClose: () => void }) => {
  const [priceRange, setPriceRange] = useState(0);
  const [priceRange2, setPriceRange2] = useState(450);

  const [data, setData] = useState<IFilterData[]>([]);

  useEffect(() => {
    const handler = async () => {
      const res = await fetch("http://localhost:3000/api/products/filter");

      const data = await res.json();

      setData(data);
    };

    handler();
  }, []);

  const uniqueSizes = () => {
    const result: string[] = [];

    for (let i = 0; i < data.map((d) => d.size).length; i++) {
      data[i].size.forEach((d) => !result.includes(d) && result.push(d));
    }

    return [...new Set(result)];
  };

  const uniqueColors = () => {
    const result: string[] = [];

    for (let i = 0; i < data.map((d) => d.color).length; i++) {
      data[i].color.forEach((d) => !result.includes(d) && result.push(d));
    }

    return [...new Set(result)];
  };

  console.log(uniqueSizes());

  const minValue = Math.min(...data.map((d) => d.price));
  const maxValue = Math.max(...data.map((d) => d.price));

  return (
    <div
      onMouseDown={onClose}
      className="fixed w-full h-full inset-0 bg-black bg-opacity-80 z-40 flex justify-end"
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="h-full w-1/4 overflow-y-auto bg-white"
      >
        <div className="h-full">
          <Accordion title="SORT BY">
            <div className="px-4 py-2">NEWEST</div>
            <div className="px-4 py-2">PRICE (HIGH - LOW)</div>
            <div className="px-4 py-2">PRICE (LOW - HIGHT)</div>
          </Accordion>

          <Accordion title="CATEGORY">
            {[...new Set([...new Set(data.map((d) => d.category))])].map(
              (d) => (
                <div key={d} className="hover:bg-opac-b-1 px-4 py-2 text-sm">
                  {d}
                </div>
              )
            )}
          </Accordion>
          <Accordion title="SIZE">
            {uniqueSizes().map((d) => (
              <div key={d} className="hover:bg-opac-b-1 px-4 py-2 text-sm">
                {d}
              </div>
            ))}
          </Accordion>
          <Accordion title="COLOR">
            <div className="flex items-center px-4 pb-4 gap-2 flex-wrap">
              {uniqueColors().map((d) => (
                <div
                  key={d}
                  style={{ backgroundColor: d }}
                  className="w-7 h-7 rounded-full border border-opac-b-2"
                ></div>
              ))}
            </div>
          </Accordion>
          <Accordion title="BRAND">
            {[...new Set(data.map((d) => d.brand))].map((d) => (
              <div key={d} className="hover:bg-opac-b-1 px-4 py-2 text-sm">
                {d}
              </div>
            ))}
          </Accordion>
          <div className="mt-12   p-4">
            <div className="flex w-1/2 items-center justify-between">
              <div className="rounded border border-opac-b-2">{priceRange}</div>
              <div className="rounded border border-opac-b-2">
                {priceRange2}
              </div>
            </div>
            <div className="w-1/2 h-1  flex  rounded">
              <div className="w-1/2 bg-opac-b-4 relative">
                <div
                  style={{
                    left: Math.floor((priceRange / (maxValue / 2)) * 90) + "%"
                  }}
                  className="w-4 h-4 rounded-full bg-black absolute top-1/2 -translate-y-1/2"
                ></div>
                <input
                  type="range"
                  name="volume"
                  id="volume"
                  min={0}
                  max={maxValue / 2}
                  step={10}
                  className="bg-white absolute top-0 w-full h-full left-0"
                  value={priceRange}
                  onChange={(e) => setPriceRange(+e.target.value)}
                />
              </div>
              <div className="w-1/2 relative bg-opac-b-4">
                <div className="w-[90%] h-full relative flex items-center">
                  <div
                    //  (new value - old value)/(old value)*100
                    style={{
                      left:
                        Math.floor((priceRange2 / maxValue) * 200) - 100 + "%"
                    }}
                    className="w-4 h-4 rounded-full bg-black absolute flex items-center justify-center top-1/2 -translate-y-1/2"
                  ></div>
                </div>
                <input
                  type="range"
                  name="volume2"
                  id="volume2"
                  min={maxValue / 2}
                  max={maxValue}
                  step={10}
                  className="bg-transparent absolute top-0 w-full h-full left-0"
                  value={priceRange2}
                  onChange={(e) => {
                    setPriceRange2(+e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
