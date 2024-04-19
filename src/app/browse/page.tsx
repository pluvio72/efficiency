"use client";

import AlgoDetailsModal from "@/components/AlgoDetailsModal";
import Tag from "@/components/Tag";
import { ALGORITHMS } from "@/data/algorithms";
import { Algorithm } from "@/types";
import { useState } from "react";
import { InlineMath } from "react-katex";

export default function Browse() {
  const [selected, setSelected] = useState<Algorithm>();

  const onSelect = (algo: Algorithm) => {
    setSelected(algo);
    (document.getElementById("algo_details") as any).showModal();
  };

  return (
    <div className="min-h-[95vh] p-4 flex flex-col">
      <div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="grid grid-cols-2 gap-x-4 py-4">
        {ALGORITHMS.map((algo) => {
          const name = algo.name.split(" ");

          return (
            <div
              key={algo.key}
              className={
                "flex flex-row shadow transition cursor-pointer shadow-3xl mb-4 rounded-lg hover:bg-gray-700 bg-gray-800"
              }
              onClick={() => onSelect(algo)}
            >
              <div className="stat place-items-left border-r">
                <div className="stat-value text-2xl">{name[0]}</div>
                <div className="stat-value text-2xl">{name[1]}</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">Description</div>
                <div className="text-sm">
                  {algo.tags.map((tag) => (
                    <Tag key={tag} name={tag} />
                  ))}
                </div>
              </div>
              <div className="stat place-items-center border-l">
                <div className="stat-title">Complexity</div>
                <div className="stat-value text-3xl">
                  <InlineMath math={algo.complexity.bigO.value} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <AlgoDetailsModal details={selected} />
    </div>
  );
}
