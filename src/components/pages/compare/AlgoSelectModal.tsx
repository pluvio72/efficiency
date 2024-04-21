import { ALGORITHMS } from "@/data/algorithms";
import { Algorithm } from "@/types";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";
import Tag from "../../ui/Tag";
import Tex from "@matejmazur/react-katex";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import AlgorithmCard from "../_universal/AlgorithmCard";

const ITEMS_PER_PAGE = 5;

export default function AlgoSelectModal({ open, setOpen, onSave }: Props) {
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[75%] overflow-hidden">
        <div className="px-6">
          <Input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={onChangeFilter}
          />
        </div>
        <div className="p-6">
          {filteredData.map((algo) => (
            <AlgorithmCard
              onClick={() => select(algo)}
              key={algo.key}
              details={algo}
            />
          ))}
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
      </DialogContent>
    </Dialog>
  );
}

interface Props {
  open: boolean;
  setOpen: (newVal: boolean) => void;
  onSave: (selected: Algorithm[]) => void;
}
