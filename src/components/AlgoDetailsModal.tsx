import { Algorithm } from "@/types";

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
              <div className="stat-title">Downloads</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            <div className="stat">
              <div className="stat-title">New Users</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
            <div className="stat">
              <div className="stat-title">New Registers</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
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
