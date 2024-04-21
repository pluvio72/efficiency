"use client";

import AlgoDetailsModal from "@/components/pages/browse/AlgoDetailsModal";
import Tag from "@/components/ui/Tag";
import { ALGORITHMS } from "@/data/algorithms";
import { Algorithm } from "@/types";
import { useState } from "react";
import Tex from "@matejmazur/react-katex";
import { Input } from "@/components/ui/input";

export default function Browse() {
  const [selected, setSelected] = useState<Algorithm>();
  const [detailModelOpen, setDetailModalOpen] = useState(false);

  const onSelect = (algo: Algorithm) => {
    setSelected(algo);
    setDetailModalOpen(true);
  };

  return (
    <div className="min-h-[95vh] p-4 flex flex-col">
      <div>
        <Input type="text" placeholder="Search" className="grow" />
      </div>
      <div className="grid grid-cols-2 gap-x-4 py-4">
        {ALGORITHMS.map((algo) => {
          const name = algo.name.split(" ");

          return (
            <div
              key={algo.key}
              className={
                "flex flex-row justify-evenly transition cursor-pointer mb-4 rounded-lg hover:bg-accent border px-6 py-2"
              }
              onClick={() => onSelect(algo)}
            >
              <div className="flex flex-col justify-center border-r w-full">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {name[0]}
                </h4>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {name[1]}
                </h4>
              </div>
              <div className="flex flex-col items-center justify-evenly border-r w-full">
                <div className="font-light text-sm text-muted-foreground">
                  Description
                </div>
                <div className="text-sm">
                  {algo.tags.map((tag) => (
                    <Tag key={tag} name={tag} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full border-l">
                <div className="font-light text-sm text-muted-foreground">
                  Complexity
                </div>
                <div className="stat-value text-3xl">
                  <Tex>{algo.complexity.bigO.value}</Tex>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <AlgoDetailsModal
        details={selected}
        open={detailModelOpen}
        setOpen={setDetailModalOpen}
      />
    </div>
  );
}
