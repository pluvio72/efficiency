"use client";

import AlgoDetailsModal from "@/components/pages/browse/AlgoDetailsModal";
import { Algorithm } from "@/types";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import AlgorithmCard from "@/components/pages/_universal/AlgorithmCard";
import { ALGORITHMS } from "@/data/algorithms";

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
        {ALGORITHMS.map((algo) => (
          <AlgorithmCard
            onClick={() => onSelect(algo)}
            details={algo}
            key={algo.key}
            parentClassName="mb-4"
          />
        ))}
      </div>
      <AlgoDetailsModal
        details={selected}
        open={detailModelOpen}
        setOpen={setDetailModalOpen}
      />
    </div>
  );
}
