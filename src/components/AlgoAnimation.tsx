"use client";

import { generateColorArray } from "@/util/Colors";
import { useState } from "react";
import anime from "animejs";
import { AnimationManager } from "@/util/Animation";

const CARD_WIDTH = 60;
const CARD_PADDING = 10;
const CARD_HEIGHT = 100;

export default function AlgoAnimation({}: Props) {
  const [data, setData] = useState<number[]>([8, 5, 6, 3, 1, 2, 4, 7]);

  const cols = generateColorArray("#ffffff", "#000000", data.length);

  const anim = new AnimationManager();

  const animate = async () => {
    const generator = anim.bubbleSort(data);

    let result = generator.next();
    let _data = [...data];
    let iter = 0;

    while (!result.done) {
      for (let i = 0; i < result.value.length; i++) {
        for (let j = 0; j < _data.length; j++) {
          if (result.value[i] === _data[j]) {
            // if index is same then it hasn't changed and skip over
            if (i === j) {
              iter++;
              continue;
            } else {
              let diff = i - j;
              let val = diff * CARD_WIDTH + diff * CARD_PADDING;

              console.log(`movin el: ${_data[j]}, pixels: ${val}`);
              anime({
                targets: `.card-item-${_data[j]}`,
                translateX: val,
              });
              iter++;
              continue;
            }
          }
        }
        await new Promise((r) => setTimeout(r, 50));
      }
      result = generator.next();
    }
  };

  return (
    <div
      className={`flex flex-row w-full h-full items-center justify-center gap-x-[${CARD_PADDING}px]`}
    >
      {data.map((item) => (
        <div
          key={item}
          style={{
            backgroundColor: cols[item - 1],
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
          }}
          className={`rounded-md card-item-${item}`}
        />
      ))}
      <button className="btn" onClick={animate}>
        Animate
      </button>
    </div>
  );
}

interface Props {}
