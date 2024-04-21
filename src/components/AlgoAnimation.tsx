"use client";

import { generateColorArray } from "@/util/Colors";
import { useCallback, useEffect, useState } from "react";
import anime, { AnimeInstance } from "animejs";
import { ArrowPathIcon, EyeIcon, PlayIcon } from "@heroicons/react/16/solid";
import CodeViewModal from "./CodeViewModal";
import { Algorithm } from "@/types";
import {
  GENERATOR_KEY_MAP,
  KEY_MAP,
} from "@/util/algorithm-runner/data/SortingAlgorithms";

const CARD_WIDTH = 60;
const CARD_PADDING = 10;
const CARD_HEIGHT = 100;

const DEFAULT_DATA = [8, 5, 6, 3, 1, 2, 4, 7];

export default function AlgoAnimation({ details, parentModalOpen }: Props) {
  // TODO: rethink use of data here as state, currently being used as normal var
  const [data, setData] = useState<number[]>(DEFAULT_DATA);
  const [animations, setAnimations] = useState<AnimeInstance[]>([]);

  const cols = generateColorArray("#ffffff", "#000000", data.length);

  const reset = useCallback(() => {
    anime({
      targets: ".card-item",
      translateX: 0,
    });
  }, []);

  useEffect(() => {
    if (!parentModalOpen) {
      reset();
    }
  }, [parentModalOpen, reset]);

  const animate = async () => {
    const generator = GENERATOR_KEY_MAP[details.key]([...data]);
    const _animations = [];

    let result = generator.next();
    let _data = [...data];

    while (!result.done) {
      for (let i = 0; i < result.value.length; i++) {
        for (let j = 0; j < _data.length; j++) {
          if (result.value[i] === _data[j]) {
            // if index is same then it hasn't changed and skip over
            if (i === j) {
              continue;
            } else {
              let diff = i - j;
              let val = diff * CARD_WIDTH + diff * CARD_PADDING;

              // console.log(`movin el: ${_data[j]}, pixels: ${val}`);
              _animations.push(
                anime({
                  targets: `.card-item-${_data[j]}`,
                  translateX: val,
                })
              );
              continue;
            }
          }
        }
        await new Promise((r) => setTimeout(r, 50));
      }
      result = generator.next();
    }

    setAnimations(_animations);
  };

  const showCode = () => {
    (document.getElementById("code_view") as any).showModal();
  };

  return (
    <div
      className={`relative flex flex-row w-full h-full items-center justify-center gap-x-[10px] rounded-md`}
    >
      {data.map((item) => (
        <div
          key={item}
          style={{
            backgroundColor: cols[item - 1],
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
          }}
          className={`rounded-md card-item-${item} card-item`}
        />
      ))}
      <div className="absolute top-0 right-0 bg-gray-500 p-1 rounded-md flex">
        <span
          className="text-black cursor-pointer text-sm flex items-center border-r border-slate-700 px-2"
          onClick={showCode}
        >
          Code
          <EyeIcon className="ml-1 h-4 w-4" />
        </span>
        <span
          className="text-black cursor-pointer text-sm flex border-r border-slate-700 items-center px-2"
          onClick={reset}
        >
          Reset <ArrowPathIcon className="h-4 w-4 ml-1" />
        </span>
        <span
          className="text-black cursor-pointer text-sm flex items-center px-2"
          onClick={animate}
        >
          Play <PlayIcon className="h-4 w-4" />
        </span>
      </div>
      <CodeViewModal func={KEY_MAP[details.key]} />
    </div>
  );
}

interface Props {
  details: Algorithm;
  parentModalOpen: boolean;
}
