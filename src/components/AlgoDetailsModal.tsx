import { Algorithm } from "@/types";
import { InlineMath } from "react-katex";
import AlgoAnimation from "./AlgoAnimation";
import { KEY_MAP } from "@/util/algorithm-runner/data/SortingAlgorithms";

export default function AlgoDetailsModal({ details }: Props) {
  if (!details) return <></>;

  return (
    <dialog id="algo_details" className="modal">
      <div className="modal-box">
        <h3 className="text-center mb-4 font-bold text-lg">{details?.name}</h3>
        <div className="w-full h-[300px] bg-base-300 rounded-md">
          <AlgoAnimation func={KEY_MAP[details.key]} />
        </div>
        <p className="py-4">{details?.description}</p>
        <div className="flex flex-row">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Big O</div>
              <div className="stat-value text-center">
                <InlineMath math={details?.complexity.bigO.value} />
              </div>
              <div className="stat-desc">Quadratic</div>
            </div>
            <div className="stat">
              <div className="stat-title">Best Case</div>
              <div className="stat-value text-center">
                {details?.complexity.bestCase.value ? (
                  <InlineMath math={details?.complexity.bestCase.value} />
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
                  <InlineMath math={details?.complexity.worstCase.value} />
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
          <button className="btn">Close</button>
        </form>
      </div>
    </dialog>
  );
}

interface Props {
  details?: Algorithm;
}
