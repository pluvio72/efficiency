import { ALGORITHMS } from "@/data/algorithms";
import { Algorithm } from "@/types";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";
import { InlineMath } from "react-katex";

const ITEMS_PER_PAGE = 5;

export default function AlgoSelectModal({ onSave }: Props) {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<Algorithm[]>([]);
  const [filter, setFilter] = useState("");

  const MAX_PAGES = Math.ceil(ALGORITHMS.length / ITEMS_PER_PAGE) - 1;

  const select = (algo: Algorithm) => {
    const index = selected.findIndex((e) => e.name === algo.name);
    if (index === -1) {
      setSelected((prev) => [...prev, algo]);
    } else {
      setSelected((arr) => {
        const newArr = [...arr];
        newArr.splice(index, 1);
        return [...newArr];
      });
    }
  };

  const isSelected = (algo: Algorithm) =>
    selected.find((e) => e.key === algo.key) !== undefined;

  const nextPage = () => page < MAX_PAGES && setPage((prev) => prev + 1);
  const prevPage = () => page > 0 && setPage((prev) => prev - 1);

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) =>
    setFilter(e.target.value);

  const filteredData = ALGORITHMS.filter((e) =>
    e.name.toLowerCase().includes(filter.toLowerCase())
  ).slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  const _onSave = () => onSave(selected);

  return (
    <dialog id="algo_select" className="modal">
      <div className="modal-box w-[75%] overflow-hidden px-0">
        <div className="px-6">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onChange={onChangeFilter}
            />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
        </div>
        <div className="p-6">
          {filteredData.map((algo) => {
            const name = algo.name.split(" ");
            return (
              <div
                key={algo.key}
                className={clsx(
                  "flex flex-row shadow w-full transition cursor-pointer shadow-3xl mb-4 rounded-lg",
                  isSelected(algo) ? "bg-gray-600" : "hover:bg-gray-700"
                )}
                onClick={() => select(algo)}
              >
                <div className="stat place-items-left border-r">
                  <div className="stat-value text-2xl">{name[0]}</div>
                  <div className="stat-value text-2xl">{name[1]}</div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-title">Description</div>
                  {/* <div className="stat-value text-secondary">4,200</div> */}
                  {/* <div className="stat-desc">↗︎ 40 (2%)</div> */}
                  <div className="text-sm">
                    {algo.tags.map((tag) => (
                      <div key={tag} className="badge badge-accent mx-1 mb-1">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="stat place-items-center border-l">
                  <div className="stat-title">Complexity</div>
                  <div className="stat-value text-3xl">
                    <InlineMath math={algo.complexity} />
                  </div>
                  {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="modal-action flex justify-center mt-0">
          <div className="join">
            <button onClick={prevPage} className="join-item btn">
              «
            </button>
            <button className="join-item btn">Page {page + 1}</button>
            <button onClick={nextPage} className="join-item btn">
              »
            </button>
          </div>
          {/* if there is a button in form, it will close the modal */}
          <form method="dialog">
            <button className="btn mx-2">Close</button>
            <button className="btn btn-primary mx-2" onClick={_onSave}>
              Save
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

interface Props {
  onSave: (selected: Algorithm[]) => void;
}
