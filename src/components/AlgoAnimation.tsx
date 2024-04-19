"use client";

import { generateColorArray } from "@/util/Colors";
import { useState } from "react";

export default function AlgoAnimation({}: Props) {
  const [data, setData] = useState<number[]>([8, 5, 6, 3, 1, 2, 4, 7]);

  const cols = generateColorArray("#ffffff", "#000000", data.length);

  return (
    <div className="flex flex-row w-full h-full items-center justify-center gap-x-4">
      {data.map((item, index) => (
        <div
          key={item}
          style={{ backgroundColor: cols[index] }}
          className="w-[60px] h-[100px] rounded-md"
        />
      ))}
    </div>
  );
}

interface Props {}
