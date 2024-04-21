"use client";

import AlgoSelectModal from "@/components/pages/compare/AlgoSelectModal";
import ControlBar from "@/components/pages/compare/ControlBar";
import { Algorithm } from "@/types";
import { useState } from "react";
import DataInputModal from "@/components/pages/compare/DataInputModal";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { PencilIcon, PlusIcon } from "lucide-react";

export default function Compare() {
  const [data, setData] = useState<number[]>([]);
  const [selectedAlgos, setSelectedAlgos] = useState<Algorithm[]>([]);
  const [runTimes, setRunTimes] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const [dataInputModalOpen, setDataInputModalOpen] = useState(false);
  const [algoSelectModalOpen, setAlgoSelectModalOpen] = useState(false);

  const openAlgoSelectModal = () => setAlgoSelectModalOpen(true);
  const openDataInputModal = () => setDataInputModalOpen(true);

  const onAlgosSelected = (selected: Algorithm[]) => {
    setSelectedAlgos(selected);
  };

  const postAlgos = async () => {
    const keys = selectedAlgos.map((e) => e.key);
    const res = await fetch("/api/algorithms", {
      method: "POST",
      body: JSON.stringify({
        keys,
        data,
      }),
    });

    return await res.json();
  };

  const runAlgos = async () => {
    setLoading(true);
    const { runTimes } = await postAlgos();
    setRunTimes(runTimes);
    setLoading(false);
  };

  const renderRuntime = (runTimeVal?: number) => {
    if (loading) {
      return <span className="loading loading-dots loading-sm"></span>;
    } else if (runTimeVal) {
      return <span className="stat-value text-2xl">{runTimeVal} ms</span>;
    } else {
      return <span className="stat-value text-2xl">- -</span>;
    }
  };

  return (
    <main className="flex min-h-[95vh] flex-col items-center justify-evenly p-48">
      <ControlBar actions={{ run: runAlgos }} />
      <div className="container flex flex-col items-center">
        <span className="text-md mb-4">
          Input your test data or random data below.
        </span>
        <Button onClick={openDataInputModal}>
          <PencilIcon className="h-5 w-5 mr-2" />
          Input data
        </Button>
      </div>
      <Separator />
      <div className="flex flex-col w-full">
        {selectedAlgos.map((algo, index) => {
          const name = algo.name.split(" ");
          return (
            <div
              key={algo.key}
              className="flex flex-row w-full mb-4 rounded-lg bg-neutral"
            >
              <div className="stat place-items-left border-r">
                <span className="stat-value text-2xl">{name[0]}</span>
                <span className="stat-value text-2xl">{name[1]}</span>
              </div>
              <div className="stat">
                <span className="stat-title">Runtime</span>
                {renderRuntime(runTimes[index])}
              </div>
            </div>
          );
        })}
        <div className="flex items-center flex-col">
          <Button onClick={openAlgoSelectModal}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Select algorithms
          </Button>
        </div>
      </div>
      <AlgoSelectModal
        open={algoSelectModalOpen}
        setOpen={setAlgoSelectModalOpen}
        onSave={onAlgosSelected}
      />
      <DataInputModal
        open={dataInputModalOpen}
        setOpen={setDataInputModalOpen}
        onSave={setData}
      />
    </main>
  );
}
