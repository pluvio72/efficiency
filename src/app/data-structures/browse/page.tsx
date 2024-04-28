"use client";

import { DetailsModal } from "@/components/pages/data-structures/DetailsModal";
import { DATA_STRUCTURES } from "@/data/data-structures";
import { DataStructure } from "@/types";
import { useState } from "react";

export default function Page() {
  const [detailsModalOpen, setDetailModalOpen] = useState(false);
  const [selectedStructure, setSelectedStructure] = useState<DataStructure>();

  const openDetailsModal = (structure: DataStructure) => {
    setDetailModalOpen(true);
    setSelectedStructure(structure);
  };

  return (
    <div className="min-h-[95vh] p-4 flex flex-col">
      <div className="grid grid-cols-2 gap-x-4 py-4">
        {DATA_STRUCTURES.map((data) => (
          <div
            onClick={() => openDetailsModal(data)}
            key={data.key}
            className="cursor-pointer transition rounded-lg hover:bg-accent border px-6 py-2"
          >
            <span className="text-xl font-semibold tracking-tight">
              {data.name}
            </span>
          </div>
        ))}
      </div>
      <DetailsModal
        open={detailsModalOpen}
        setOpen={setDetailModalOpen}
        content={selectedStructure?.content}
      />
    </div>
  );
}
