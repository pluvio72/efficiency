"use client";

import { Algorithm } from "@/types";
import AlgoAnimation from "./AlgoAnimation";
import { forwardRef } from "react";
import Tex from "@matejmazur/react-katex";

export default forwardRef<HTMLDialogElement, Props>(function AlgoDetailsModal(
  { details, open, setOpen },
  ref
) {
  if (!details) return <></>;

  return (
    <dialog id="algo_details" className="modal" ref={ref}>
      <div className="modal-box">
        <h3 className="text-center mb-4 font-bold text-lg">{details?.name}</h3>
        <div className="w-full h-[300px] bg-base-300 rounded-md">
          <AlgoAnimation details={details} parentModalOpen={open} />
        </div>
        <p className="py-4">{details?.description}</p>
        <div className="flex flex-row">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Big O</div>
              <div className="stat-value text-center">
                <Tex>{details?.complexity.bigO.value}</Tex>
              </div>
              <div className="stat-desc">Quadratic</div>
            </div>
            <div className="stat">
              <div className="stat-title">Best Case</div>
              <div className="stat-value text-center">
                {details?.complexity.bestCase.value ? (
                  <Tex>{details?.complexity.bestCase.value}</Tex>
                ) : (
                  "NA"
                )}
              </div>
              <div className="stat-desc">
                {details?.complexity.bestCase.type}
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Worst Case</div>
              <div className="stat-value text-center">
                {details?.complexity.worstCase.value ? (
                  <Tex>{details?.complexity.worstCase.value}</Tex>
                ) : (
                  "NA"
                )}
              </div>
              <div className="stat-desc">
                {details?.complexity.worstCase.type}
              </div>
            </div>
          </div>
          <div className="columns-2 flex-grow text-black">
            <div className="bg-green-300 rounded-md p-4">
              <div className="text-center">
                <span className="font-bold text-center">Strengths</span>
              </div>
              <div>
                <ul>
                  {details?.strengths.map((strength) => (
                    <li key={strength}>{strength}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-red-300 rounded-md p-4">
              <div className="text-center">
                <span className="font-bold">Weaknesses</span>
              </div>
              <div>
                <ul>
                  {details?.weaknesses.map((weakness) => (
                    <li key={weakness}>{weakness}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop mt-2">
          <button className="btn" onClick={() => setOpen(false)}>
            Close
          </button>
        </form>
      </div>
    </dialog>
  );
});

interface Props {
  details?: Algorithm;
  open: boolean;
  setOpen: (newState: boolean) => void;
}
