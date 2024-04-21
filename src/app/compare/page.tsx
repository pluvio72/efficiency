"use client";

import AlgoSelectModal from "@/components/pages/compare/AlgoSelectModal";
import ControlBar from "@/components/ControlBar";
import { Algorithm } from "@/types";
import { PencilIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import DataInputModal from "@/components/DataInputModal";

export default function Compare() {
  const [data, setData] = useState<number[]>([]);
  const [selectedAlgos, setSelectedAlgos] = useState<Algorithm[]>([]);
  const [runTimes, setRunTimes] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const openAlgoSelectModal = () => {
    (document.getElementById("algo_select") as any).showModal();
  };

  const openDataInputModal = () => {
    (document.getElementById("data_input") as any).showModal();
  };

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
        <button className="btn btn-wide text-lg" onClick={openDataInputModal}>
          Input data
          <PencilIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="divider">CHOOSE ALGORITHMS</div>
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
          <button
            className="btn btn-wide text-lg"
            onClick={openAlgoSelectModal}
          >
            Select algorithms
            <PlusCircleIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <AlgoSelectModal onSave={onAlgosSelected} />
      <DataInputModal onSave={setData} />
    </main>
  );
}
