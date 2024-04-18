import { Algorithm } from "@/types";
import { InlineMath } from "react-katex";

export default function AlgoDetailsModal({ details }: Props) {
  return (
    <dialog id="algo_details" className="modal">
      <div className="modal-box">
        <h3 className="text-center mb-4 font-bold text-lg">{details?.name}</h3>
        <div className="w-full h-[300px] bg-base-300 rounded-md"></div>
        <p className="py-4">{details?.description}</p>
        <div className="flex flex-row">
          <div className="stats stats-vertical shadow">
            <div className="stat">
              <div className="stat-title">Big O</div>
              <div className="stat-value">
                <InlineMath math={details?.complexity.bigO} />
              </div>
              <div className="stat-desc">Top 1</div>
            </div>
            <div className="stat">
              <div className="stat-title">Best Case</div>
              <div className="stat-value">
                {details?.complexity.bestCase || "NA"}
              </div>
              <div className="stat-desc">↗︎ 400 </div>
            </div>
            <div className="stat">
              <div className="stat-title">Worst Case</div>
              <div className="stat-value">
                {details?.complexity.worstCase || "NA"}
              </div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
          <div className="columns-2 flex-grow text-black">
            <div className="bg-green-300 rounded-md p-4">
              <div className="text-center">
                <span className="font-bold text-center">Strengths</span>
              </div>
            </div>
            <div className="bg-red-300 rounded-md p-4">
              <div className="text-center">
                <span className="font-bold">Weaknesses</span>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

interface Props {
  details?: Algorithm;
}
