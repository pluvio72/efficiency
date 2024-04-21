"use client";

import { Algorithm } from "@/types";
import AlgoAnimation from "./AlgoAnimation";
import Tex from "@matejmazur/react-katex";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AlgoDetailsModal({ details, open, setOpen }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[70%]">
        <DialogHeader>
          <DialogTitle>{details?.name}</DialogTitle>
        </DialogHeader>
        <div className="w-full h-[300px] flex">
          <div className="bg-accent rounded-md flex-grow">
            <AlgoAnimation details={details} parentModalOpen={open} />
          </div>
          <div className="flex flex-col justify-evenly ml-4">
            <div className="flex flex-col items-center justify-center">
              <div className="font-light text-sm text-muted-foreground">
                Big O
              </div>
              <div className="scroll-m-20 text-3xl font-semibold tracking-tight">
                <Tex>{details?.complexity.bigO.value}</Tex>
              </div>
              <div className="font-light text-xsm text-muted-foreground">
                Quadratic
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="font-light text-sm text-muted-foreground">
                Best Case
              </div>
              <div className="scroll-m-20 text-3xl font-semibold tracking-tight">
                {details?.complexity.bestCase.value ? (
                  <Tex>{details?.complexity.bestCase.value}</Tex>
                ) : (
                  "NA"
                )}
              </div>
              <div className="font-light text-xsm text-muted-foreground">
                {details?.complexity.bestCase.type}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="font-light text-sm text-muted-foreground">
                Worst Case
              </div>
              <div className="scroll-m-20 text-3xl font-semibold tracking-tight">
                {details?.complexity.worstCase.value ? (
                  <Tex>{details?.complexity.worstCase.value}</Tex>
                ) : (
                  "NA"
                )}
              </div>
              <div className="font-light text-xsm text-muted-foreground">
                {details?.complexity.worstCase.type}
              </div>
            </div>
          </div>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {details?.description}
          <a className="text-bold text-gray-600">
            {" "}
            I&apos;m lazy give me the TLDR;
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
}

interface Props {
  details?: Algorithm;
  open: boolean;
  setOpen: (newState: boolean) => void;
}
