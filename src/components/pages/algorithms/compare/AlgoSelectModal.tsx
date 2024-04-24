import { ALGORITHMS } from "@/data/algorithms";
import { Algorithm } from "@/types";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";
import Tag from "../../../ui/Tag";
import Tex from "@matejmazur/react-katex";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import AlgorithmCard from "../AlgorithmCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 6;

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

  const _onSave = () => {
    onSave(selected);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[75%] overflow-hidden">
        <Input
          type="text"
          className="grow"
          placeholder="Search"
          onChange={onChangeFilter}
        />
        {filteredData.map((algo) => (
          <AlgorithmCard
            onClick={() => select(algo)}
            key={algo.key}
            details={algo}
            isSelected={isSelected(algo)}
          />
        ))}
        <div className="flex">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={prevPage} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={nextPage} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <Button className="mx-2">Close</Button>
          <Button className="mx-2" onClick={_onSave}>
            Save
          </Button>
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
